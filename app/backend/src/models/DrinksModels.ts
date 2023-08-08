import SequelizeDrinks from "../database/models/SequelizeDrinks";
import { IDrinksModel } from "../interface/meals/drinks/IDrinksModel";
import { IDrinks } from "../interface/meals/drinks/IDrinks";

export default class DrinksModel implements IDrinksModel {
  private model = SequelizeDrinks;

  async findAll(): Promise<IDrinks[]> {
    const drinks = await this.model.findAll();
    return drinks;
  }

  async findById(id: number): Promise<IDrinks | null> {
    const drink = await this.model.findByPk(id);
    if (!drink) {
      return null
    }
    return drink;
  }
}