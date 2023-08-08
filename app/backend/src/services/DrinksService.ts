import { IDrinksModel } from "../interface/meals/drinks/IDrinksModel";
import DrinksModel from "../models/DrinksModels";
import { IDrinks } from "../interface/meals/drinks/IDrinks";

export default class DrinksService {
  constructor(
    private drinksModel: IDrinksModel = new DrinksModel(),
  ) { }

  public async findAll(): Promise<IDrinks[] | []> {
    const drink = await this.drinksModel.findAll();
    return drink
  }

  public async findById(id: number): Promise<IDrinks | null> {
    const drink = await this.drinksModel.findById(id);
    return drink
  }
}