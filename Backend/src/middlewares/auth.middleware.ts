import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction):void => {
  const token = req?.cookies?.token;
  if (!token) return res.status(401).json({ message: 'Not Authenticated' });
  try {
    const decoded = jwt.verify(token, process?.env?.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};