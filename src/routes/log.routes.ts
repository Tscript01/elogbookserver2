import { Router } from 'express';
import { createDailyLog, getPlacementLogs } from '../controllers/log.controller';
import { authenticate, requireRole } from '../middlewares/auth';
import {validate  } from '../middlewares/validate';
import { createDailyLogSchema } from '../schemas/auth.schema';

const router = Router();

// Only students can create daily logs
router.post(
  '/',
  authenticate,
  requireRole('STUDENT'),
  // validate(createDailyLogSchema),
  createDailyLog
);

// Students, Industry Supervisors, and Institution Coordinators can fetch logs
router.get(
  '/placement/:placementId',
  authenticate,
  requireRole('STUDENT', 'IND_SUPERVISOR', 'INST_COORDINATOR'),
  getPlacementLogs
);

// new
export default router;
