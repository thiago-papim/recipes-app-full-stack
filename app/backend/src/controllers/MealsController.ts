import { Request, Response } from 'express';
import MealsService from '../services/MealsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MealsController {
  private _mealsService: MealsService;

  constructor() {
    this._mealsService = new MealsService();
  }

  public async findAll(_req: Request, res: Response) {
    const response = await this._mealsService.findAll();
    if (response.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(response.status)).json(response.data);
    }
    res.status(200).json(response.data);
  }

  public async findById(req: Request, res: Response) {
    const { id } = req.params;

    const serviceResponse = await this._mealsService.findById(Number(id));

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }

  public async findByName(req: Request, res: Response) {
    const { q } = req.query;
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ message: 'Invalid name parameter' });
    }
    const response = await this._mealsService.findByName(q);
    if (response.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(response.status)).json(response.data);
    }
    return res.status(200).json(response.data);
  }

  public async findByFirstLetter(req: Request, res: Response) {
    const { q } = req.query;
    if (!q || typeof q !== 'string' || q.length !== 1) {
      return res.status(400).json({ message: 'Invalid letter parameter' });
    }
    const response = await this._mealsService.findByFirstLetter(q);
    if (response.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(response.status)).json(response.data);
    }
    return res.status(200).json(response.data);
  }

  public async findRandom(req: Request, res: Response) {
    const response = await this._mealsService.findRandom();
    if (response.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(response.status)).json(response.data);
    }
    return res.status(200).json(response.data);
  }

  public async getAllCategories(req: Request, res: Response) {
    const response = await this._mealsService.getAllCategories();
    if (response.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(response.status)).json(response.data);
    }
    return res.status(200).json(response.data);
  }

  public async getAllAreas(req: Request, res: Response) {
    const response = await this._mealsService.getAllAreas();
    if (response.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(response.status)).json(response.data);
    }
    return res.status(200).json(response.data);
  }

  public async findByCategory(req: Request, res: Response) {
    const { q } = req.query;
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ message: 'Invalid category parameter' });
    }
    const response = await this._mealsService.findByCategory(q);
    if (response.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(response.status)).json(response.data);
    }
    return res.status(200).json(response.data);
  }

  public async findByArea(req: Request, res: Response) {
    const { q } = req.query;
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ message: 'Invalid area parameter' });
    }
    const response = await this._mealsService.findByArea(q);
    if (response.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(response.status)).json(response.data);
    }
    return res.status(200).json(response.data);
  }

  public async getAllNames(req: Request, res: Response) {
    const response = await this._mealsService.getAllNames();
    if (response.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(response.status)).json(response.data);
    }
    return res.status(200).json(response.data);
  }

  public async findByIngredient(req: Request, res: Response) {
    const { q } = req.query;
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ message: 'Invalid ingredient parameter' });
    }
    const response = await this._mealsService.findByIngredient(q);
    if (response.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(response.status)).json(response.data);
    }
    return res.status(200).json(response.data);
  }
  
}