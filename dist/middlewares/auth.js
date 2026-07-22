"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
exports.requireRole = requireRole;
const token_1 = require("../utils/token");
const errors_1 = require("../utils/errors");
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        next(new errors_1.UnauthorizedError('Authentication token is missing or malformed'));
        return;
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        next(new errors_1.UnauthorizedError('Authentication token is missing'));
        return;
    }
    try {
        const decoded = (0, token_1.verifyAccessToken)(token);
        req.user = {
            id: decoded.userId,
            email: '', // Email is not included in the token payload, can be fetched from DB if needed
            role: decoded.role,
        };
        // if(req.user.role !== 'ADMIN') {
        //   next(new ForbiddenError('Only admins can access this resource'));
        //   return;
        // }
        next();
    }
    catch (error) {
        next(new errors_1.UnauthorizedError('Invalid or expired authentication token'));
    }
}
function requireRole(...roles) {
    return (req, res, next) => {
        if (!req.user) {
            next(new errors_1.UnauthorizedError('Authentication  is required'));
            return;
        }
        if (!roles.includes(req.user.role)) {
            next(new errors_1.ForbiddenError('You do not have permission to access this resource'));
            return;
        }
        next();
    };
}
//# sourceMappingURL=auth.js.map