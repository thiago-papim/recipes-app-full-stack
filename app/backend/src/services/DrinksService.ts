import { IDrinksModel } from "../interface/meals/drinks/IDrinksModel";
import DrinksModel from "../models/DrinksModels";
import { IDrinks } from "../interface/meals/drinks/IDrinks";
import { ServiceResponse } from "../Interfaces/ServiceResponse";

export default class DrinksService {
  constructor(
    private drinksModel: IDrinksModel = new DrinksModel(),
  ) { }

  public async findByName(name: string): Promise<ServiceResponse<IDrinks[]>> {
    const result = await this.drinksModel.findByName(name);
    if (result && result.length > 0) {
      return { status: 'SUCCESSFUL', data: result };
    }
    return { status: 'NOT_FOUND', data: { message: 'Nenhum drink encontrado'} };
  }

  public async findByLetter(name: string): Promise<ServiceResponse<IDrinks[]>> {
    const result = await this.drinksModel.findByLetter(name);
    if (result && result.length > 0) {
      return { status: 'SUCCESSFUL', data: result };
    }
    return { status: 'NOT_FOUND', data: { message: 'Nenhum drink encontrado'} };
  }

  public async fyndByRandom(): Promise<ServiceResponse<IDrinks>> {
    const result = await this.drinksModel.findByRandom();
    return { status: 'SUCCESSFUL', data: result };
  }

  public async findByIngredient(ingredient: string): Promise<ServiceResponse<IDrinks[]>> {
    const result = await this.drinksModel.findByIngredient(ingredient);
    if (result && result.length > 0) {
      return { status: 'SUCCESSFUL', data: result };
    }
    return { status: 'NOT_FOUND', data: { message: 'Nenhum drink encontrado'} };
  }

  public async findByCategory(category: string): Promise<ServiceResponse<IDrinks[]>> {
    const result = await this.drinksModel.findByCategory(category);
    if (result && result.length > 0) {
      return { status: 'SUCCESSFUL', data: result };
    }
    return { status: 'NOT_FOUND', data: { message: 'Nenhum drink encontrado'} };
  }
}