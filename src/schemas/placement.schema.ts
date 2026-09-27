import { z } from 'zod';

const MINIMUM_DURATION_MS = 30 * 24 * 60 * 60 * 1000;

export const createPlacementSchema = z
  .object({
    company_name: z.string().trim().min(2, 'Company name must be at least 2 characters'),
    state: z.string().trim().min(1, 'State of attachment is mandatory'),
    city: z.string().trim().min(1, 'Town/City is mandatory'),
    company_address: z.string().trim().min(3, 'Address is too short').nullable().optional(),
    company_contact: z.string().trim().nullable().optional(),
    company_email: z.preprocess(
      (val) => (val === '' ? null : val),
      z.string().email('Invalid company email format').trim().toLowerCase().nullable().optional()
    ),
    ind_supervisor_name: z.string().trim().nullable().optional(),
    supervisor_email: z.preprocess(
      (val) => (val === '' ? null : val),
      z.string().email('Invalid supervisor email format').trim().toLowerCase().nullable().optional()
    ),
    ind_supervisor_email: z.preprocess(
      (val) => (val === '' ? null : val),
      z.string().email('Invalid supervisor email format').trim().toLowerCase().nullable().optional()
    ),
    ind_supervisor_id: z.string().uuid('Invalid supervisor ID format').nullable().optional(),
    inst_coordinator_id: z.string().uuid('Invalid coordinator ID format').nullable().optional(),
    start_date: z.string().datetime({ offset: true, message: 'Start date must be a valid ISO 8601 string' }),
    end_date: z.string().datetime({ offset: true, message: 'End date must be a valid ISO 8601 string' }),
  })
  .refine(
    (data) => {
      const start = new Date(data.start_date).getTime();
      const end = new Date(data.end_date).getTime();
      return end > start;
    },
    {
      message: 'Training conclusion date must be later than commencement date',
      path: ['end_date'],
    }
  )
  .refine(
    (data) => {
      const start = new Date(data.start_date).getTime();
      const end = new Date(data.end_date).getTime();
      return end - start >= MINIMUM_DURATION_MS;
    },
    {
      message: 'SIWES industrial training duration must be at least 1 month (30 days)',
      path: ['end_date'],
    }
  );

export const updatePlacementSchema = z
  .object({
    company_name: z.string().trim().min(2, 'Company name must be at least 2 characters').optional(),
    state: z.string().trim().min(1, 'State cannot be empty').optional(),
    city: z.string().trim().min(1, 'Town/City cannot be empty').optional(),
    company_address: z.string().trim().nullable().optional(),
    company_contact: z.string().trim().nullable().optional(),
    company_email: z.preprocess(
      (val) => (val === '' ? null : val),
      z.string().email('Invalid company email format').trim().toLowerCase().nullable().optional()
    ),
    ind_supervisor_name: z.string().trim().nullable().optional(),
    supervisor_email: z.preprocess(
      (val) => (val === '' ? null : val),
      z.string().email('Invalid supervisor email format').trim().toLowerCase().nullable().optional()
    ),
    ind_supervisor_email: z.preprocess(
      (val) => (val === '' ? null : val),
      z.string().email('Invalid supervisor email format').trim().toLowerCase().nullable().optional()
    ),
    ind_supervisor_id: z.string().uuid('Invalid supervisor ID format').nullable().optional(),
    inst_coordinator_id: z.string().uuid('Invalid coordinator ID format').nullable().optional(),
    start_date: z.string().datetime({ offset: true, message: 'Start date must be an ISO 8601 string' }).optional(),
    end_date: z.string().datetime({ offset: true, message: 'End date must be an ISO 8601 string' }).optional(),
  })
  .refine(
    (data) => {
      if (data.start_date && data.end_date) {
        return new Date(data.end_date).getTime() > new Date(data.start_date).getTime();
      }
      return true;
    },
    {
      message: 'Training conclusion date must be later than commencement date',
      path: ['end_date'],
    }
  )
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
      message: 'SIWES industrial training duration must be at least 1 month (30 days)',
      path: ['end_date'],
    }
  );

export type CreatePlacementInput = z.infer<typeof createPlacementSchema>;
export type UpdatePlacementInput = z.infer<typeof updatePlacementSchema>;