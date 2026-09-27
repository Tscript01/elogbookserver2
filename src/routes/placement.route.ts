import { Router } from 'express';
import {
  createPlacement,
  getCurrentPlacement,
  getPlacementById,
  updatePlacementById,
} from '../controllers/placement.controller';
import {
  createPlacementSchema,
  updatePlacementSchema,
} from '../schemas/placement.schema';
import { validate } from '../middlewares/validate';
import { authenticate, requireRole } from '../middlewares/auth';
import { downloadLogbookPDF } from '../controllers/export.controller';


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

router.put(
  '/:id',
  authenticate,
  requireRole('ADMIN', 'STUDENT'),
  validate(updatePlacementSchema),
  updatePlacementById
);

// Student downloads their own full logbook
router.get('/export/pdf',authenticate, downloadLogbookPDF);

// Coordinators/Admins can download a specific student's logbook by ID
router.get('/export/pdf/:studentId', authenticate, downloadLogbookPDF);

export default router;