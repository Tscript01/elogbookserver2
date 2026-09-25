import { Router } from 'express';
import { authenticate, requireRole } from '../middlewares/auth';
import {
  getStudentClearanceStatus,
  submitForItfStamp,
  downloadEndorsedLogbookPdf,
} from '../controllers/clearance.controller';

const router = Router();

// Protect all student routes
router.use(authenticate);
router.use(requireRole('STUDENT'));

// Clearance & Download routes
router.get('/clearance-status', getStudentClearanceStatus);
router.post('/clearance/submit-itf', submitForItfStamp);
router.get('/logbook/download-pdf', downloadEndorsedLogbookPdf);

export default router;