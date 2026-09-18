import { Router } from 'express';
import { createDailyLog, getPlacementLogs, getStudentLogs, } from '../controllers/log.controller';
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
router.get(
  '/',
  authenticate,
  requireRole('ADMIN', 'STUDENT'),
  getStudentLogs
);
// How to Query From the Client
// Per Week:
// GET /api/logs?week=3

// Per Month (e.g., June 2026):
// GET /api/logs?month=6&year=2026

// Paginated (all logs):
// GET /api/logs?page=2&limit=10

// Combined (e.g., paginating logs within Week 4):
// GET /api/logs?week=4&page=1&limit=6
// new
export default router;
