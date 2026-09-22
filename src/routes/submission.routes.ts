import { Router } from 'express';
import {
  getStudentSubmissions,
  submitWeeklyLog,
  getWeekSubmissionDetails
} from '../controllers/submission.controller';
import { submitWeekSchema } from '../schemas/submission.schema';
import { validate } from '../middlewares/validate';
import { authenticate, requireRole } from '../middlewares/auth';

const router: Router = Router();

router.get(
  '/',
  authenticate,
  requireRole('STUDENT'),
  getStudentSubmissions
);

router.post(
  '/',
  authenticate,
  requireRole('STUDENT'),
  validate(submitWeekSchema),
  submitWeeklyLog
);

router.get(
  '/:weekNo',
  authenticate,
  requireRole('STUDENT', 'IND_SUPERVISOR', 'INST_COORDINATOR', 'ADMIN'),
  getWeekSubmissionDetails
);

export default router;