import { IDrinksModel } from "../interface/meals/drinks/IDrinksModel";
import DrinksModel from "../models/DrinksModels";
import { IDrinks } from "../interface/meals/drinks/IDrinks";

export default class DrinksService {
  constructor(
    private drinksModel: IDrinksModel = new DrinksModel(),
  ) { }

  public async findByName(name: string): Promise<IDrinks[] | null> {
    const drink = await this.drinksModel.findByName(name);
    return drink
  }

  public async findByLetter(name: string): Promise<IDrinks[] | null> {
    const drink = await this.drinksModel.findByLetter(name);
    return drink
  }

  public async fyndByRandom(): Promise<IDrinks> {
    const drink = await this.drinksModel.findByRandom();
    return drink;
  }

  public async findByIngredient(ingredient: string): Promise<IDrinks[] | null> {
    const drink = await this.drinksModel.findByIngredient(ingredient);
    return drink;
  }

  public async findByCategory(category: string): Promise<IDrinks[] | null> {
    const drink = await this.drinksModel.findByCategory(category);
    return drink;
  }
}