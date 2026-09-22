import { z } from 'zod';

const MINIMUM_DURATION_MS = 30 * 24 * 60 * 60 * 1000;
export const createPlacementSchema = z.object({
//   student_id: z.string().uuid(),
  company_name: z.string().min(2),
  company_address: z.string().min(5).optional(),
  company_contact: z.string().min(5).optional(),
    company_email: z.string().email().optional(),
  ind_supervisor_id: z.string().nullable().optional(),
  inst_coordinator_id: z.string().uuid().nullable().optional(),
  start_date: z.string().datetime(),
  end_date: z.string().datetime(),
}).refine(data => new Date(data.start_date) < new Date(data.end_date), {
  message: "End date must be after the start date",
  path: ["end_date"]
});

export const updatePlacementSchema = z
  .object({
    company_name: z.string().min(2, 'Company name must be at least 2 characters').trim().optional(),
    company_address: z.string().trim().nullable().optional(),
    company_contact: z.string().trim().nullable().optional(),
    company_email: z.string().email('Invalid company email').trim().toLowerCase().nullable().optional(),
    supervisor_email: z.string().email('Invalid supervisor email').trim().toLowerCase().optional(),
    ind_supervisor_id: z.string().uuid('Invalid supervisor ID format').nullable().optional(),
    inst_coordinator_id: z.string().uuid('Invalid coordinator ID format').nullable().optional(),
    start_date: z.string().datetime({ message: 'Start date must be an ISO 8601 string' }).optional(),
    end_date: z.string().datetime({ message: 'End date must be an ISO 8601 string' }).optional(),
  })
  .refine(
    (data) => {
      if (data.start_date && data.end_date) {
        const start = new Date(data.start_date).getTime();
        const end = new Date(data.end_date).getTime();
        return end - start >= MINIMUM_DURATION_MS;
      }
      return true;
    },
    {
      message: 'SIWES training duration must be at least 1 month (30 days)',
      path: ['end_date'],
    }
  );
export type CreatePlacementInput = z.infer<typeof createPlacementSchema>;
export type UpdatePlacementInput = z.infer<typeof updatePlacementSchema>;