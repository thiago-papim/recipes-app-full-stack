import { Request, Router, Response } from 'express';
import DrinksController from '../controllers/DrinksController';
import DrinksCategoryController from '../controllers/DrinksCategoryController';

const drinksController = new DrinksController();
const drinksCategoryController = new DrinksCategoryController();

const router = Router();

router.get('/categories', (req: Request, res: Response) => drinksCategoryController.findAll(req, res))
router.get('/categories', (req: Request, res: Response) => drinksController.findAll(req, res))
router.get('/:id', (req: Request, res: Response) => drinksController.findById(req, res));

export default router;