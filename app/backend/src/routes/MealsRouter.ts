import { Request, Router, Response } from 'express';
import MealsController from '../controllers/MealsController';

const mealsController = new MealsController();

const router = Router();

router.get('/', (req: Request, res: Response) => mealsController.findAll(req, res));

router.get('/:id', (req: Request, res: Response) => mealsController.findById(req, res));

export default router;