import { parsePhoneNumberFromString } from "libphonenumber-js/max";

export const BY_PHONE_HINT =
  "Белорусский номер, например +375 29 123-45-67";

/** Валидный BY-номер через libphonenumber (метаданные Google). */
export function parseByPhone(value: string) {
  const phone = parsePhoneNumberFromString(value.trim(), {
    defaultCountry: "BY",
    extract: false,
  });

  if (!phone?.isValid() || phone.country !== "BY") return null;
  return phone;
}

export function isByPhone(value: string): boolean {
  return parseByPhone(value) != null;
}

/** E.164 (+375…) для дедупа и Telegram */
export function normalizeByPhone(value: string): string | null {
  return parseByPhone(value)?.format("E.164") ?? null;
}
