import { z } from 'zod';

export const createDailyLogSchema = z.object({
  placement_id: z.string().uuid('Invalid placement ID format'),
  week_no: z.number().int().positive('Week number must be a positive integer'),
  log_date: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), { message: 'Invalid log date format' })
    .transform((val) => new Date(val)),
  description: z.string().min(10, 'Description must be at least 10 characters long'),
  image_url: z.string().url('Invalid image URL format').optional().or(z.literal('')),
});

export type CreateDailyLogInput = z.infer<typeof createDailyLogSchema>;