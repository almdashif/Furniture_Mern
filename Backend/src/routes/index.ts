
import { Router } from 'express';
import authRoutes from './auth';
import productRoutes from './product';
import orderRoutes from './order';
import paymentRoutes from './payment';
import adminRoutes from './admin';

const router = Router();
router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/orders', orderRoutes);
router.use('/payment', paymentRoutes);
router.use('/admin', adminRoutes);

export default router;