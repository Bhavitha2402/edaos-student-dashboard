import { z } from "zod";

export const loginSchema = z.object({
  enrollmentNumber: z
    .string()
    .trim()
    .min(1, "Enrollment number is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean(),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const contactAdminSchema = z.object({
  enrollmentNumber: z
    .string()
    .trim()
    .min(1, "Enrollment number is required"),
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .regex(/^[0-9+\-\s]+$/, "Enter a valid phone number"),
});

export type ContactAdminFormValues = z.infer<typeof contactAdminSchema>;
