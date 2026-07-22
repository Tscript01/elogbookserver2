import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/errors';
import { ZodError } from 'zod';
import { Prisma } from '../../src/generated/prisma/client';
const isDev = process.env.NODE_ENV === 'development';
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void {

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
    return;
  }
    if (err instanceof ZodError) {
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
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
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
