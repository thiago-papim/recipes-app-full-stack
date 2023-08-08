import { Router } from 'express';
import MealsRouter from './MealsRouter';

const router = Router();

router.use('/meals', MealsRouter);

export default router;