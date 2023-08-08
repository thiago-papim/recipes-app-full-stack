import { Router } from 'express';
import drinkRouter from './drinks.routes'

const router = Router();

router.use('/drinks', drinkRouter)

export default router;