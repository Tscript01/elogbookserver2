import { z } from "zod";


const SELF_REGISTER_ROLES = [
  "STUDENT",
  "IND_SUPERVISOR",
  "INST_COORDINATOR",
  "ADMIN"
] as const;

export const registerSchema = z.object({
  email: z.email("Invalid email").trim(),
  password: z.string().min(8, "Password must be at least 8 characters").trim(),
  name: z.string().min(1, "Name is required").trim(),
  
  role: z.enum(SELF_REGISTER_ROLES, "Role must be one of: STUDENT, IND_SUPERVISOR, INST_COORDINATOR")
});

export const loginSchema = z.object({
  email: z.email("Invalid email").trim(),
  password: z.string().min(1, "Password is required"),
});

export const refreshSchema = z.object({
  refresh_token: z.string().min(1, "Refresh token is required"),
});

export const adminCreateUserSchema = z.object({
  email: z.string().email("Invalid email").trim(),
  password: z.string().min(8, "Password must be at least 8 characters").trim(),
  // FIX: Use string literals and correct error syntax
  role: z.enum(["STUDENT", "IND_SUPERVISOR", "INST_COORDINATOR", "ITF_OFFICIAL", "ADMIN"] as const, "Role must be one of: STUDENT, IND_SUPERVISOR, INST_COORDINATOR, ITF_OFFICIAL, ADMIN"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email").trim(),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1, "Token is required"),
  newPassword: z.string().min(6, "Password must be at least 6 characters").trim(),
});

export const changePasswordSchema = z.object({
  oldPassword: z.string().min(1, "Old password is required").trim(),
  newPassword: z.string().min(6, "Password must be at least 6 characters").trim(),
});

export const createDailyLogSchema = z.object({
  placementId: z.string().min(1, "Placement ID is required"),
  logDate: z.string().min(1, "Log date is required").refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  weekNo: z.number().int().positive("Week number must be a positive integer"),
  description: z.string().min(1, "Description is required").trim(),
  imageUrl: z.string().url("Invalid URL").optional(),
});
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RefreshInput = z.infer<typeof refreshSchema>;
export type AdminCreateUserInput = z.infer<typeof adminCreateUserSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type CreateDailyLogInput = z.infer<typeof createDailyLogSchema>;