import { IDrinksCategoryModel } from "../interface/meals/drinks/IDrinkCategoryModel";
import DrinksCategoryModel from "../models/DrinksCategoryModel";
import { IDrinksCategory } from "../interface/meals/drinks/IDrinksCategory";

export default class DrinksCategoryService {
  constructor(
    private drinksCategoryModel: IDrinksCategoryModel = new DrinksCategoryModel(),
  ) { }

  public async findAll(): Promise<IDrinksCategory[]> {
    const categories = await this.drinksCategoryModel.findAll();
    return categories;
  }
}