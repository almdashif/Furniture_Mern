import { Router, Request, Response } from 'express';
import user from './user.routes';
const router = Router();

router.use('/users', user);
export default router;
