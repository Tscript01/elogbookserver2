import { z } from 'zod';

export const submitWeekSchema = z.object({
  body: z.object({
    week_no: z.number({
      error: 'week_no is required'
    }).int().positive('week_no must be greater than 0')
  })
});