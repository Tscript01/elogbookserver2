import jwt from "jsonwebtoken";
import env from "../config/env";
import { Role } from "../../src/generated/prisma/client";

export interface TokenPayload {
  userId: string;
  role: Role;
}


export const signAccessToken = async (payload: TokenPayload): Promise<string> => {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET as jwt.Secret, {
    expiresIn: (env.JWT_ACCESS_EXPIRES_IN || "15m") as jwt.SignOptions["expiresIn"],
  });
};

export const signRefreshToken = async (payload: TokenPayload): Promise<string> => {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET as jwt.Secret, {
    expiresIn: (env.JWT_REFRESH_EXPIRES_IN || "7d") as jwt.SignOptions["expiresIn"],
  });
};

export const verifyAccessToken = (token: string): TokenPayload => {
  return jwt.verify(token, env.JWT_ACCESS_SECRET as jwt.Secret) as unknown as TokenPayload;
};

export const verifyRefreshToken = (token: string): TokenPayload => {
  return jwt.verify(token, env.JWT_REFRESH_SECRET as jwt.Secret) as unknown as TokenPayload;
};

