import { Router } from 'express';

import drinkRouter from './drinks.routes'
import MealsRouter from './MealsRouter';

const router = Router();

router.use('/meals', MealsRouter);
router.use('/drinks', drinkRouter)

export default router;