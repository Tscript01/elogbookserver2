import { Router } from 'express';
import { 
  login, 
  register, 
  logout, 
  requestPasswordReset, 
  resetPassword, 
  changePassword, 
  getMe,
} from '../controllers/auth.controller';
import { registerSchema, resetPasswordSchema, changePasswordSchema, forgotPasswordSchema, loginSchema } from '../schemas/auth.schema';
import { requireRole, authenticate } from "../middlewares/auth";
import {validate, } from "../middlewares/validate";
const router = Router();

router.post('/register', validate(registerSchema),  register); 
router.post('/login', validate(loginSchema), login);
router.post('/logout', logout);
router.post('/forgot-password', validate(forgotPasswordSchema), requestPasswordReset);
router.post('/reset-password', validate(resetPasswordSchema), resetPassword);

router.get('/me', authenticate, requireRole('STUDENT', 'IND_SUPERVISOR', 'INST_COORDINATOR', 'ITF_OFFICIAL', 'ADMIN'), getMe);
router.post('/change-password', authenticate, validate(changePasswordSchema), requireRole('STUDENT', 'IND_SUPERVISOR', 'INST_COORDINATOR', 'ITF_OFFICIAL', 'ADMIN'), changePassword);

export default router;