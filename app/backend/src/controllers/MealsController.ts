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
  
}