import type { Response, NextFunction } from 'express';
import {TokenPayload, verifyAccessToken, verifyRefreshToken} from "../utils/token";
import { Role } from "../generated/prisma";
import { UnauthorizedError, ForbiddenError } from '../utils/errors';
import type { Request } from 'express';

export interface AuthUser {
  id: string;
  email: string;
  role: Role;
}

export interface AuthenticatedRequest extends Request {
  user?: AuthUser;
}



export function authenticate(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    next(new UnauthorizedError('Authentication token is missing or malformed'));
    return;
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    next(new UnauthorizedError('Authentication token is missing'));
    return;
  }

  try {
    const decoded = verifyAccessToken(token) ;
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
  } catch (error) {
    
    next(new UnauthorizedError('Invalid or expired authentication token'));
  }
}


export function requireRole(...roles: Role[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      next(new UnauthorizedError('Authentication  is required'));
      return;
    }

    if (!roles.includes(req.user.role)) {
      next(new ForbiddenError('You do not have permission to access this resource'));
      return;
    }

    next();
  };
}
