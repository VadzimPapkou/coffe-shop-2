import { z } from "zod";
import { BY_PHONE_HINT, parseByPhone } from "@/lib/phone";

const byPhone = z
  .string()
  .trim()
  .min(1, BY_PHONE_HINT)
  .transform((value, ctx) => {
    const phone = parseByPhone(value);
    if (!phone) {
      ctx.addIssue({ code: "custom", message: BY_PHONE_HINT });
      return z.NEVER;
    }
    return phone.format("E.164");
  });

const utmSchema = z
  .record(z.string(), z.string())
  .optional()
  .transform((value) => value ?? {});

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Укажите имя")
    .max(80, "Слишком длинное имя"),
  phone: byPhone,
  comment: z
    .string()
    .trim()
    .max(1000)
    .optional()
    .transform((value) => value ?? ""),
  page: z
    .string()
    .trim()
    .max(300)
    .optional()
    .transform((value) => value ?? ""),
  utm: utmSchema,
});

export type LeadInput = z.infer<typeof leadSchema>;

export function firstLeadError(error: z.ZodError): string {
  return error.issues[0]?.message ?? "Проверьте поля формы";
}
