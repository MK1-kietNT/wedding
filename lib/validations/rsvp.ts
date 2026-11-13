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
    .min(8, "Vui lòng nhập số điện thoại hợp lệ.")
    .max(20, "Số điện thoại quá dài.")
    .regex(/^[+\d\s()-]+$/, "Số điện thoại chỉ gồm chữ số và ký tự hợp lệ."),
  attendance: z.enum(["attending", "declining"], {
    required_error: "Vui lòng chọn trạng thái tham dự.",
  }),
  guestsCount: z.coerce
    .number()
    .int()
    .min(1, "Tối thiểu 1 khách.")
    .max(6, "Tối đa 6 khách mỗi thiệp mời."),
  message: z
    .string()
    .trim()
    .min(4, "Vui lòng gửi đôi lời chúc mừng đến cô dâu & chú rể.")
    .max(400, "Lời chúc tối đa 400 ký tự."),
});

export type RsvpFormValues = z.infer<typeof rsvpSchema>;
