"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const auth_1 = require("../middlewares/auth");
const validate_1 = require("../middlewares/validate");
const router = (0, express_1.Router)();
router.post('/register', (0, validate_1.validate)(auth_schema_1.registerSchema), auth_controller_1.register);
router.post('/login', (0, validate_1.validate)(auth_schema_1.loginSchema), auth_controller_1.login);
router.post('/logout', auth_controller_1.logout);
router.post('/forgot-password', (0, validate_1.validate)(auth_schema_1.forgotPasswordSchema), auth_controller_1.requestPasswordReset);
router.post('/reset-password', (0, validate_1.validate)(auth_schema_1.resetPasswordSchema), auth_controller_1.resetPassword);
router.get('/me', auth_1.authenticate, (0, auth_1.requireRole)('STUDENT', 'IND_SUPERVISOR', 'INST_COORDINATOR', 'ITF_OFFICIAL', 'ADMIN'), auth_controller_1.getMe);
router.post('/change-password', auth_1.authenticate, (0, validate_1.validate)(auth_schema_1.changePasswordSchema), (0, auth_1.requireRole)('STUDENT', 'IND_SUPERVISOR', 'INST_COORDINATOR', 'ITF_OFFICIAL', 'ADMIN'), auth_controller_1.changePassword);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map