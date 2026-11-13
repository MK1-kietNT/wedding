import { z } from "zod";

export const rsvpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(80, "Name must be under 80 characters."),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid contact number.")
    .max(20, "Phone number is too long.")
    .regex(/^[+\d\s()-]+$/, "Please enter digits and standard phone symbols only."),
  attendance: z.enum(["attending", "declining"], {
    required_error: "Please let us know if you can attend.",
  }),
  guestsCount: z.coerce
    .number()
    .int()
    .min(1, "At least 1 guest.")
    .max(6, "Maximum 6 guests per invitation."),
  message: z
    .string()
    .trim()
    .min(4, "Please leave a short note or blessing for the couple.")
    .max(400, "Message must be under 400 characters."),
});

export type RsvpFormValues = z.infer<typeof rsvpSchema>;

