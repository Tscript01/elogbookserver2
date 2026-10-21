import { Router } from 'express';
import { checkInToday, getPlacementAttendanceAudit, getTodayAttendanceStatus } from '../controllers/attendance.controller';
import { authenticate, requireRole } from '../middlewares/auth';
import { getAssignedStudentsAttendance } from '../controllers/coordinator.controller';

const router = Router();

router.post('/check-in', authenticate, checkInToday);
router.get('/today', authenticate   , getTodayAttendanceStatus);
router.get('/coordinator/attendances', authenticate, requireRole('INST_COORDINATOR'), getAssignedStudentsAttendance);
router.get('/audit/:placementId', authenticate, getPlacementAttendanceAudit);

export default router;