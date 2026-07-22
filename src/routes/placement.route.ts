import { Router } from 'express';
import {createPlacement} from '../controllers/placement.controller';
import { createPlacementSchema } from '../schemas/placement.schema';
import { validate } from '../middlewares/validate';
import { authenticate, requireRole } from '../middlewares/auth';

const router: Router = Router();


router.post(
  '/',
  authenticate,
  requireRole('ADMIN', "STUDENT"),
  validate(createPlacementSchema),
  createPlacement
);

// router.get(
//   '/:studentId',
//   requireRole('ADMIN', 'INST_COORDINATOR', 'IND_SUPERVISOR', 'STUDENT'),
//   getPlacement
// );

export default router;