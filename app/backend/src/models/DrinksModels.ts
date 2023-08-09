import SequelizeDrinks from "../database/models/SequelizeDrinks";
import { IDrinksModel } from "../interface/meals/drinks/IDrinksModel";
import { IDrinks } from "../interface/meals/drinks/IDrinks";
import { Op } from "sequelize";

export default class DrinksModel implements IDrinksModel {
  private model = SequelizeDrinks;

  async findByName(name: string): Promise<IDrinks[]> {
    const drink = await this.model.findAll({ 
      where: { 
        strDrink: {
          [Op.like]: `%${name}%`
        }
      } 
    });
    return drink;
  };

  async findByLetter(name: string): Promise<IDrinks[]> {
    const drink = await this.model.findAll({ 
      where: { 
        strDrink: {
          [Op.startsWith]: name[0]
        }
      } 
    });
    return drink;
  };

  async findByRandom(): Promise<IDrinks> {
    const drinks = await this.model.findAll();
    const randomNumber = Math.floor(Math.random() * drinks.length);
    return drinks[randomNumber];
  }

  async findByIngredient(ingredient: string): Promise<IDrinks[]> {
    const drinks = await this.model.findAll({
      where: {
        [Op.or]: Array.from({ length: 15 }, (_, i) => ({
          [`strIngredient${i + 1}`]: ingredient
        }))
      }
    });
    return drinks;
  }

  async findByCategory(category: string): Promise<IDrinks[]> {
    const drinks = await this.model.findAll({ where: { strCategory: category }});
    return drinks;
  }
}