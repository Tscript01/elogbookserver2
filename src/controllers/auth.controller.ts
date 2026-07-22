import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import {prisma} from "../config/prisma";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../utils/token";
import { AuthenticatedRequest} from "../middlewares/auth";
import { sendEmail } from "../utils/resend";

const SALT_ROUNDS = 12;

const hashToken = (token: string): string =>
  crypto.createHash("sha256").update(token).digest("hex");

const refreshTokenExpiry = (): Date => {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  return date;
};

const resetTokenExpiry = (): Date => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 30);
  return date;
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, role, name } = req.body
    // return res.status(503).json({ error: "Service is temporarily unavailable. Please try again later." });

    const existing = await prisma.user.findUnique({ where: { email } ,select: {
    id: true,
    email: true,
    name: true,
    role: true,
  },});

    if (existing) {
      return res.status(409).json({ error: "Email already in use" });
    }

    const password_hash = await bcrypt.hash(password, SALT_ROUNDS);

    const user = await prisma.user.create({
      data: { email, password_hash, role, name },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });
    
    await prisma.refreshToken.deleteMany({
      where: {
        user_id: user.id
      }
    });

    const access_token = await signAccessToken({ userId: user.id.toString(), role: user.role });
    const refresh_token = await signRefreshToken({ userId: user.id.toString(), role: user.role });

    await prisma.refreshToken.create({
      data: {
        user_id: user.id,
        token: hashToken(refresh_token.toString()),
        expires_at: refreshTokenExpiry(),
      },
    });

    return res.status(201).json({
      message: "Account created successfully",
      access_token,
      refresh_token,
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (error: any) {
    console.log(error)

    
    return res.status(500).json({ error: "Internal server errorsssss" , error_details: error});
  }
};

export const login = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { email, password } = req.body;
    

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const access_token = await signAccessToken({ userId: user.id.toString(), role: user.role });
    const refresh_token = await signRefreshToken({ userId: user.id.toString(), role: user.role });
    

await prisma.refreshToken.create({
      data: {
        user_id: user.id,
        token: hashToken(refresh_token.toString()),
        expires_at: refreshTokenExpiry(),
      },
    });
    

    return res.status(200).json({
      message: "Login successful",
      access_token,
      refresh_token,
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (error: any) {
console.log(error)
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const refresh = async (req: Request, res: Response) => {
  try {
    const { refresh_token } = req.body;

    const payload = verifyRefreshToken(refresh_token);
    const hashed = hashToken(refresh_token);

    const stored = await prisma.refreshToken.findUnique({
      where: { token: hashed },
    });

    if (!stored || stored.expires_at < new Date()) {
      return res.status(401).json({ error: "Invalid or expired refresh token" });
    }

    const access_token = signAccessToken({
      userId: payload.userId,
      role: payload.role,
    });

    return res.status(200).json({ access_token });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Invalid or expired refresh token" });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    const { refresh_token } =req.body;

    const hashed = hashToken(refresh_token);

    await prisma.refreshToken.deleteMany({ where: { token: hashed } });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};

// export const adminCreateUser = async (req: Request, res: Response) => {
//   try {
//     const { email, password, role } = adminCreateUserSchema.parse(req.body);

//     const existing = await prisma.user.findUnique({ where: { email } });

//     if (existing) {
//       return res.status(409).json({ error: "Email already in use" });
//     }

//     const password_hash = await bcrypt.hash(password, SALT_ROUNDS);

//     const user = await prisma.user.create({
//       data: { email, password_hash, role },
//     });

//     return res.status(201).json({
//       message: "User created successfully",
//       user: { id: user.id, email: user.email, role: user.role },
//     });
//   } catch (error: any) {
//     if (error.name === "ZodError") {
//       return res.status(400).json({ errors: error.errors });
//     }
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

export const requestPasswordReset = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    // always return 200 — never reveal if the email exists
    if (!user) {
      return res.status(200).json({ message: "If that email exists, a reset link has been sent" });
    }

    const raw_token = crypto.randomBytes(32).toString("hex");
    const hashed = hashToken(raw_token);

    await prisma.passwordResetToken.deleteMany({ where: { user_id: user.id } });

    await prisma.passwordResetToken.create({
      data: {
        user_id: user.id,
        token: hashed,
        expires_at: resetTokenExpiry(),
        jon: ""
      },
    });

    // TODO: send raw_token to user via email (plug in your email service here)
    // e.g. await sendResetEmail(user.email, raw_token);
    const send = await sendEmail(user.email, "Password Reset Request", `<p>You requested a password reset. Click <a href="http://localhost:5000/reset-password?token=${raw_token}">here</a> to reset your password. This link will expire in 30 minutes.</p>`).then(() => console.log(`Password reset email sent to ${user.email}`)).then(

    ).catch((err) => console.error(`Failed to send password reset email to ${user.email}:`, err));
    // console.log(`Password reset token for ${email}: ${raw_token}`);

    return res.status(200).json({ message: "If that email exists, a reset link has been sent" });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getMe = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized: No user ID found in token' });
    }
  try {
    const user = await prisma.user.findUnique({
      where: { id:userId },
      select: { id: true, email: true, role: true, created_at: true }
    });

    if (!user) return res.status(404).json({ error: 'User not found' });
    return res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user details:', error);
  return  next(error);
    // return res.status(500).json({ error: 'Internal server error' });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body;

    const hashed = hashToken(token);

    const resetRecord = await prisma.passwordResetToken.findUnique({
      where: { token: hashed },
    });

    if (!resetRecord || resetRecord.expires_at < new Date()) {
      return res.status(400).json({ error: "Invalid or expired reset token" });
    }

    const password_hash = await bcrypt.hash(newPassword, SALT_ROUNDS);

    await prisma.user.update({
      where: { id: resetRecord.user_id },
      data: { password_hash },
    });

    await prisma.passwordResetToken.delete({ where: { token: hashed } });

    // invalidate all existing refresh tokens on password reset
    await prisma.refreshToken.deleteMany({ where: { user_id: resetRecord.user_id } });

    return res.status(200).json({ message: "Password reset successful" });
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const changePassword = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user?.id;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isValid = await bcrypt.compare(oldPassword, user.password_hash);
    if (!isValid) return res.status(400).json({ error: 'Invalid old password' });

    const password_hash = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: userId },
      data: { password_hash }
    });
// return
    return res.status(200).json({ message: 'Password changed successfully' });
  } catch (error: any) {
    if (error.name === 'ZodError') return res.status(400).json({ errors: error.errors });
    return res.status(500).json({ error: 'Internal server error' });
  }
};