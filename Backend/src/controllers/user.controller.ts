import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import {User} from '../models/User.modal';
import Token from '../models/Token.modal';
import { generateToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt';
import { sendEmail } from '../utils/email.util';
import jwt from 'jsonwebtoken';

// @desc Register new user
export const register = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const existingUser = await User.findOne({ email:data?.email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(data?.password, 10);
    const user = await User.create({...data, password: hashedPassword });

    return res.status(201).json({ message: 'User registered successfully', userId: user._id });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

// @desc Login user
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const accessToken = generateToken({ id: String(user._id), role: String(user.role) });
    const refreshToken = generateRefreshToken({ id: String(user._id), role: String(user.role) });

    // 🟢 Save refresh token in DB
    await Token.create({
      userId: user._id,
      token: refreshToken,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    });

    return res.json({ user, accessToken, refreshToken });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};


// @desc Refresh token
export const refreshToken = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(401).json({ message: 'Refresh token required' });

    const decoded = verifyRefreshToken(token) as { id: string; role: string };
    if (!decoded) return res.status(403).json({ message: 'Invalid refresh token' });

    // Check DB if token is still valid
    const storedToken = await Token.findOne({ token });
    if (!storedToken) return res.status(403).json({ message: 'Token not found or expired' });

    // Issue new access token
    const accessToken = generateToken({ id: decoded.id, role: decoded.role });
    return res.json({ accessToken });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};


// @desc Forgot password


export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    // if (!user) {
    //   return res.status(404).json({ message: "User not found" });
    // }

    // // Generate reset token
    // const resetToken = jwt.sign(
    //   { id: user._id },
    //   process.env.JWT_SECRET!,
    //   { expiresIn: "15m" }
    // );

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${"resetToken"}`;

    // Send reset email
    await sendEmail(
    email,
      "Password Reset Request",
      `<p>Hello ${user?.name || "User"},</p>
       <p>You requested to reset your password.</p>
       <p><a href="${resetUrl}">Click here</a> to reset your password. 
       This link will expire in 15 minutes.</p>`
    );

    return res.status(200).json({ message: "Password reset link sent to your email" });
  } catch (err) {
    next(err);
  }
};
