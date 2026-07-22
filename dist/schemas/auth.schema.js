"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDailyLogSchema = exports.changePasswordSchema = exports.resetPasswordSchema = exports.forgotPasswordSchema = exports.adminCreateUserSchema = exports.refreshSchema = exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
const SELF_REGISTER_ROLES = [
    "STUDENT",
    "IND_SUPERVISOR",
    "INST_COORDINATOR",
    "ADMIN"
];
exports.registerSchema = zod_1.z.object({
    email: zod_1.z.email("Invalid email").trim(),
    password: zod_1.z.string().min(8, "Password must be at least 8 characters").trim(),
    name: zod_1.z.string().min(1, "Name is required").trim(),
    role: zod_1.z.enum(SELF_REGISTER_ROLES, "Role must be one of: STUDENT, IND_SUPERVISOR, INST_COORDINATOR")
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.email("Invalid email").trim(),
    password: zod_1.z.string().min(1, "Password is required"),
});
exports.refreshSchema = zod_1.z.object({
    refresh_token: zod_1.z.string().min(1, "Refresh token is required"),
});
exports.adminCreateUserSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email").trim(),
    password: zod_1.z.string().min(8, "Password must be at least 8 characters").trim(),
    // FIX: Use string literals and correct error syntax
    role: zod_1.z.enum(["STUDENT", "IND_SUPERVISOR", "INST_COORDINATOR", "ITF_OFFICIAL", "ADMIN"], "Role must be one of: STUDENT, IND_SUPERVISOR, INST_COORDINATOR, ITF_OFFICIAL, ADMIN"),
});
exports.forgotPasswordSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email").trim(),
});
exports.resetPasswordSchema = zod_1.z.object({
    token: zod_1.z.string().min(1, "Token is required"),
    newPassword: zod_1.z.string().min(6, "Password must be at least 6 characters").trim(),
});
exports.changePasswordSchema = zod_1.z.object({
    oldPassword: zod_1.z.string().min(1, "Old password is required").trim(),
    newPassword: zod_1.z.string().min(6, "Password must be at least 6 characters").trim(),
});
exports.createDailyLogSchema = zod_1.z.object({
    placementId: zod_1.z.string().min(1, "Placement ID is required"),
    logDate: zod_1.z.string().min(1, "Log date is required").refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
    weekNo: zod_1.z.number().int().positive("Week number must be a positive integer"),
    description: zod_1.z.string().min(1, "Description is required").trim(),
    imageUrl: zod_1.z.string().url("Invalid URL").optional(),
});
//# sourceMappingURL=auth.schema.js.map