import { NextResponse } from "next/server";
import { isDuplicateLead } from "@/lib/lead-dedup";
import { firstLeadError, leadSchema } from "@/lib/lead-schema";

function formatUtm(utm: Record<string, string>): string {
  const entries = Object.entries(utm).filter(([, v]) => v.trim());
  return entries.length
    ? entries.map(([k, v]) => `${k}=${v}`).join(", ")
    : "—";
}

async function sendTelegram(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не заданы");
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Telegram API ${res.status}: ${body.slice(0, 200)}`);
  }
}

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: firstLeadError(parsed.error) },
      { status: 400 },
    );
  }

  const { name, phone, interest, comment, page, utm } = parsed.data;

  if (isDuplicateLead(phone)) {
    return NextResponse.json({ ok: true, duplicate: true }, { status: 200 });
  }

  const text = [
    "☕ Новая заявка · Кварта",
    "",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Интерес: ${interest}`,
    comment ? `Комментарий: ${comment}` : null,
    "",
    `Страница: ${page || "—"}`,
    `UTM: ${formatUtm(utm)}`,
  ]
    .filter((line) => line != null)
    .join("\n");

  try {
    await sendTelegram(text);
  } catch (err) {
    console.error("[api/lead]", err);
    return NextResponse.json(
      { error: "Не отправилось, попробуйте позже" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
