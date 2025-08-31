import jwt from 'jsonwebtoken';
import { ObjectId, Schema } from 'mongoose';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'refreshsecret';

interface TokenPayload {
  id: string;
  role: string;
}

export const generateToken = (data: TokenPayload) => {
  return jwt.sign(data, JWT_SECRET, { expiresIn: '1d' });
};

export const generateRefreshToken = (data: TokenPayload) => {
  return jwt.sign(data, JWT_REFRESH_SECRET, { expiresIn: '7d' });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
};


export const verifyRefreshToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  } catch {
    return null;
  }
};
