import { z } from "zod";

export const rsvpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Vui lòng nhập họ và tên (ít nhất 2 ký tự).")
    .max(80, "Họ và tên tối đa 80 ký tự."),
  phone: z
    .string()
    .trim()
    .max(20, "Số điện thoại quá dài.")
    .optional()
    .default(""),
  attendance: z
    .enum(["attending", "declining"])
    .optional()
    .default("attending"),
  guestsCount: z.coerce
    .number()
    .int()
    .min(1, "Tối thiểu 1 khách.")
    .max(6, "Tối đa 6 khách mỗi thiệp mời.")
    .optional()
    .default(1),
  message: z
    .string()
    .trim()
    .max(400, "Lời chúc tối đa 400 ký tự.")
    .optional()
    .default("Chúc mừng hạnh phúc hai bạn!"),
  source: z.enum(["rsvp", "wish"]).optional().default("rsvp"),
});

export type RsvpFormValues = z.infer<typeof rsvpSchema>;
