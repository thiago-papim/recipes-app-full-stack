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
    if (result) {
      return { status: 'SUCCESSFUL', data: result };
    }
    return { status: 'NOT_FOUND', data: { message: 'Nenhuma receita encontrada'} };
  }


  public async findByName(name: string): Promise<ServiceResponse<IMeals[]>> {
    const result = await this._mealsModel.findByName(name);
    if (!result) {
      return { status: 'NOT_FOUND', data: { message: JSON.stringify(result) } };
    }
    return { status: 'SUCCESSFUL', data: result };
  }

  public async findByFirstLetter(letter: string): Promise<ServiceResponse<IMeals[]>> {
    const result = await this._mealsModel.findByFirstLetter(letter);
    if (!result || result.length === 0) {
      return { status: 'NOT_FOUND', data: { message: 'No recipes found with the specified first letter' } };
    }
    return { status: 'SUCCESSFUL', data: result };
  }

  public async findRandom(): Promise<ServiceResponse<IMeals[]>> {
    const result = await this._mealsModel.findRandom();
    if (!result || result.length === 0) {
      return { status: 'NOT_FOUND', data: { message: 'No random recipes found' } };
    }
    return { status: 'SUCCESSFUL', data: result };
  }

  public async getAllCategories(): Promise<ServiceResponse<object>> {
    const result = await this._mealsModel.getAllCategories();
    if (!result ) {
      return { status: 'NOT_FOUND', data: { message: 'No categories found' } };
    }
    return { status: 'SUCCESSFUL', data: result };
  }

  public async getAllAreas(): Promise<ServiceResponse<string[]>> {
    const result = await this._mealsModel.getAllAreas();
    if (!result || result.length === 0) {
      return { status: 'NOT_FOUND', data: { message: 'No areas found' } };
    }
    return { status: 'SUCCESSFUL', data: result };
  }

  public async findByCategory(category: string): Promise<ServiceResponse<IMeals[]>> {
    const result = await this._mealsModel.findByCategory(category);
    if (!result) {
      return { status: 'NOT_FOUND', data: { message: JSON.stringify(result) } };
    }
    return { status: 'SUCCESSFUL', data: result };
  }

  public async findByArea(area: string): Promise<ServiceResponse<IMeals[]>> {
    const result = await this._mealsModel.findByArea(area);
    if (!result) {
      return { status: 'NOT_FOUND', data: { message: JSON.stringify(result) } };
    }
    return { status: 'SUCCESSFUL', data: result };
  }

  public async getAllNames(): Promise<ServiceResponse<string[]>> {
    const result = await this._mealsModel.getAllNames();
    if (!result || result.length === 0) {
      return { status: 'NOT_FOUND', data: { message: 'No names found' } };
    }
    return { status: 'SUCCESSFUL', data: result };
  }

  public async findByIngredient(ingredient: string): Promise<ServiceResponse<IMeals[]>> {
    const result = await this._mealsModel.findByIngredient(ingredient);
    if (!result) {
      return { status: 'NOT_FOUND', data: { message: JSON.stringify(result) } };
    }
    return { status: 'SUCCESSFUL', data: result };
  }
 
}