"use client";

import { useState, type FormEvent } from "react";
import { TornEdge } from "./TornEdge";
import { FlatButton } from "./FlatButton";

const INTERESTS = [
  { value: "subscription", label: "Подписка" },
  { value: "order", label: "Разовый заказ" },
  { value: "question", label: "Вопрос" },
] as const;

const CONTACTS = [
  {
    label: "Адрес",
    value: "Минск, ул. Короля, 9",
    href: "https://yandex.by/maps/?text=Минск%2C%20ул.%20Короля%2C%209",
  },
  {
    label: "Самовывоз",
    value: "пн–пт 8:00–20:00 · сб–вс 10:00–18:00",
  },
  {
    label: "Доставка",
    value: "по Минску в пятницу, от 50 BYN — бесплатно",
  },
] as const;

const fieldClass =
  "font-mono w-full rounded-[14px] border border-ink/15 bg-white px-4 py-3.5 text-[14px] leading-[1.4] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-paper-soft focus:border-ink/40 focus:shadow-[0_0_0_3px_rgba(224,109,45,0.18)]";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // API подключим отдельно — пока только UI
    await new Promise((r) => setTimeout(r, 600));
    setStatus("ok");
  }

  return (
    <section
      id="contact"
      className="relative bg-[#000] pb-24 pt-24 text-cream sm:pb-32 sm:pt-28"
    >
      <TornEdge fill="#0d0d0d" position="top" />

      <div className="mx-auto grid max-w-[1100px] items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <div className="section-label mb-3">Контакты</div>
          <h2 className="section-title text-[clamp(36px,4.8vw,64px)] leading-[1.05]">
            Напишите нам
          </h2>
          <p className="font-mono mt-5 max-w-[400px] text-[14px] leading-[1.65] text-cream/45 sm:text-[15px]">
            Оставьте заявку — перезвоним и оформим подписку или разовый заказ.
            Обычно в тот же день.
          </p>

          <dl className="mt-10 flex flex-col gap-6">
            {CONTACTS.map((item) => (
              <div key={item.label}>
                <dt className="font-mono mb-1.5 text-[11px] uppercase tracking-[0.1em] text-cream/35">
                  {item.label}
                </dt>
                <dd className="m-0 font-mono text-[15px] leading-[1.5] text-cream/85 sm:text-[16px]">
                  {"href" in item && item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-cream/25 underline-offset-[5px] transition-colors hover:text-ac hover:decoration-ac/50"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none lg:justify-self-end">
          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-[36px] bg-cream px-7 py-9 text-ink sm:px-10 sm:py-11"
            noValidate
          >
            <div className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper-mut">
                  Имя
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Как к вам обращаться"
                  className={fieldClass}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper-mut">
                  Телефон
                </span>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="+375 XX XXX-XX-XX"
                  className={fieldClass}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper-mut">
                  Что интересует
                </span>
                <select
                  name="interest"
                  required
                  defaultValue="subscription"
                  className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 viewBox=%220 0 12 8%22%3E%3Cpath d=%22M1 1.5L6 6.5L11 1.5%22 fill=%22none%22 stroke=%22%231a1a1a%22 stroke-width=%221.6%22 stroke-linecap=%22round%22/%3E%3C/svg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
                >
                  {INTERESTS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-paper-mut">
                  Комментарий
                </span>
                <textarea
                  name="comment"
                  rows={4}
                  placeholder="Сорт, помол, адрес доставки…"
                  className={`${fieldClass} resize-y min-h-[110px]`}
                />
              </label>
            </div>

            <div className="mt-8">
              <FlatButton
                type="submit"
                disabled={status === "sending"}
                className="w-full max-w-none"
              >
                {status === "sending" ? "Отправляем…" : "Отправить заявку"}
              </FlatButton>
            </div>

            {status === "ok" && (
              <p className="font-mono mt-5 text-[13px] leading-[1.5] text-green">
                Заявка ушла — перезвоним в ближайшее время
              </p>
            )}
            {status === "error" && (
              <p className="font-mono mt-5 text-[13px] leading-[1.5] text-ac">
                Не отправилось. Позвоните или напишите ещё раз
              </p>
            )}
            {status === "idle" && (
              <p className="font-mono mt-5 text-[12px] leading-[1.5] text-paper-soft">
                Отвечаем в рабочее время, обычно в тот же день
              </p>
            )}
          </form>
        </aside>
      </div>
    </section>
  );
}
