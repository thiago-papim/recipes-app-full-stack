import { ServiceResponse } from '../Interfaces/ServiceResponse';
import MealsModel from '../models/MealsModel';
import { IMeals } from '../Interfaces/IMeals';

export default class MealsService {
  private _mealsModel: MealsModel;

  constructor() {
    this._mealsModel = new MealsModel();
  }

  public async findAll(): Promise<ServiceResponse<IMeals[]>> {
    const result = await this._mealsModel.findAll();
    if (!result) return { status: 'NOT_FOUND', data: result };
    return { status: 'SUCCESSFUL', data: result };
  }

  public async findById(id: number): Promise<ServiceResponse<IMeals>> {
    const result = await this._mealsModel.findById(id);
    if (!result) return { status: 'NOT_FOUND', data: { message: JSON.stringify(result) } };
    return { status: 'SUCCESSFUL', data: result };
  }
}