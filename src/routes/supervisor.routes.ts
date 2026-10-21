import { Router } from 'express';
import {
  getAssignedTrainees,
  getTraineeSubmissions,
  getSupervisorReviewQueue,
  reviewWeeklySubmission,
  setSupervisorCompanyLocation,
  getSupervisorCompanyLocation,
} from '../controllers/supervisor.controller';
import { authenticate, requireRole } from '../middlewares/auth';

const router = Router();

// Protect all supervisor endpoints
router.use(authenticate);
router.use(requireRole('IND_SUPERVISOR', 'ADMIN', 'INST_COORDINATOR'));

router.get('/trainees', getAssignedTrainees);
router.get('/placements/:placementId/submissions', getTraineeSubmissions);
router.get('/reviews', getSupervisorReviewQueue);
router.put('/submissions/:submissionId/review', reviewWeeklySubmission);
router.get('/company-location', authenticate    , getSupervisorCompanyLocation);
router.post('/company-location', authenticate, setSupervisorCompanyLocation);
export default router;