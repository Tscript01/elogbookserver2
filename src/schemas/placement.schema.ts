import { z } from 'zod';

export const createPlacementSchema = z.object({
//   student_id: z.string().uuid(),
  company_name: z.string().min(2),
  company_address: z.string().min(5).optional(),
  company_contact: z.string().min(5).optional(),
    company_email: z.string().email().optional(),
  ind_supervisor_id: z.string().uuid(),
  inst_coordinator_id: z.string().uuid().optional(),
  start_date: z.string().datetime(),
  end_date: z.string().datetime(),
}).refine(data => new Date(data.start_date) < new Date(data.end_date), {
  message: "End date must be after the start date",
  path: ["end_date"]
});

export type CreatePlacementInput = z.infer<typeof createPlacementSchema>;