import { Router } from 'express';
import { forgotPassword, login, refreshToken, register } from '../controllers/user.controller';

const router = Router();


router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.post('/forgot-password', forgotPassword);
export default router;
