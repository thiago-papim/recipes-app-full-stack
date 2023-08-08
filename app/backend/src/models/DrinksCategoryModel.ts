import SequelizeDrinksCategory from "../database/models/SequelizeDrinksCategory";
import { IDrinksCategoryModel } from "../interface/meals/drinks/IDrinkCategoryModel";
import { IDrinksCategory } from "../interface/meals/drinks/IDrinksCategory";

export default class DrinksCategoryModel implements IDrinksCategoryModel {
  private model = SequelizeDrinksCategory;

  async findAll(): Promise<IDrinksCategory[]> {
    const categories = await this.model.findAll();
    
    return categories;
  }
}