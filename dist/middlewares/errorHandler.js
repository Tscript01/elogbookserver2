"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const errors_1 = require("../utils/errors");
const zod_1 = require("zod");
const client_1 = require("../../src/generated/prisma/client");
const isDev = process.env.NODE_ENV === 'development';
function errorHandler(err, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) {
    if (err instanceof errors_1.AppError) {
        res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
        return;
    }
    if (err instanceof zod_1.ZodError) {
        res.status(400).json({
            status: 'error',
            message: 'Validation error',
            errors: err.issues.map(issue => ({
                field: issue.path.join('.'),
                message: issue.message
            }))
        });
        return;
    }
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        // P2002 = Unique Constraint Failed
        if (err.code === 'P2002') {
            res.status(409).json({
                status: 'error',
                message: 'A record with this information already exists.',
                // Optional: In dev mode, show exactly which fields caused the duplicate
                ...(isDev && { target: err.meta?.target }),
            });
            return;
        }
        // P2025 = Record Not Found (e.g., trying to update an ID that doesn't exist)
        if (err.code === 'P2025') {
            res.status(404).json({
                status: 'error',
                message: 'The requested record could not be found.',
            });
            return;
        }
    }
    // Handle default fallback
    res.status(500).json({
        status: 'error',
        error: err.message || 'Internal server error',
        message: 'Internal server error',
    });
}
//# sourceMappingURL=errorHandler.js.map