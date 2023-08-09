import { Request, Router, Response } from 'express';
import DrinksController from '../controllers/DrinksController';
import DrinksCategoryController from '../controllers/DrinksCategoryController';

const drinksController = new DrinksController();
const drinksCategoryController = new DrinksCategoryController();

const router = Router();

router.get('/categories', (req: Request, res: Response) => drinksCategoryController.findAll(req, res));
router.get('/letter', (req: Request, res: Response) => drinksController.findByLetter(req, res));
router.get('/name', (req: Request, res: Response) => drinksController.findByName(req, res));
router.get('/random', (req: Request, res: Response) => drinksController.findByRandom(req, res));
router.get('/ingredient', (req: Request, res: Response) => drinksController.findByIngredient(req, res));
router.get('/category', (req: Request, res: Response) => drinksController.findByCategory(req, res));
router.get('/:id', (req: Request, res: Response) => drinksController.findById(req, res))

export default router;