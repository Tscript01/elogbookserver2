import { Router } from 'express';
import {
  createPlacement,
  getCurrentPlacement,
  getPlacementById
} from '../controllers/placement.controller';
import { createPlacementSchema } from '../schemas/placement.schema';
import { validate } from '../middlewares/validate';
import { authenticate, requireRole } from '../middlewares/auth';

const router: Router = Router();

router.post(
  '/',
  authenticate,
  requireRole('ADMIN', 'STUDENT'),
  validate(createPlacementSchema),
  createPlacement
);

router.get(
  '/current',
  authenticate,
  requireRole('ADMIN', 'STUDENT'),
  getCurrentPlacement
);

router.get(
  '/:id',
  authenticate,
  requireRole('ADMIN', 'INST_COORDINATOR', 'IND_SUPERVISOR', 'STUDENT'),
  getPlacementById
);

export default router;