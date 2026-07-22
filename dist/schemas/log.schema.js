"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDailyLogSchema = void 0;
const zod_1 = require("zod");
exports.createDailyLogSchema = zod_1.z.object({
    placement_id: zod_1.z.string().uuid('Invalid placement ID format'),
    week_no: zod_1.z.number().int().positive('Week number must be a positive integer'),
    log_date: zod_1.z
        .string()
        .refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid log date format' })
        .transform((val) => new Date(val)),
    description: zod_1.z.string().min(10, 'Description must be at least 10 characters long'),
    image_url: zod_1.z.string().url('Invalid image URL format').optional().or(zod_1.z.literal('')),
});
//# sourceMappingURL=log.schema.js.map