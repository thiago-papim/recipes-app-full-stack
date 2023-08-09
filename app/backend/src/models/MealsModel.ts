import SequelizeMealsModel from '../database/models/SequelizeMealsModel';
import { IMeals } from '../Interfaces/IMeals';
import { MealsModelType } from '../Interfaces/IMeals';
import { Op } from 'sequelize';

export default class MealsModel implements MealsModelType {
  private model = SequelizeMealsModel;

  async findAll(): Promise<IMeals[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }

  async findById(id: number): Promise<IMeals | null> {
    const meal = await this.model.findOne({ where: { idMeal: id }})
    return meal;
  }

  async findByName(name: string): Promise<IMeals[] | null > {
    const dbData = await this.model.findAll({
      where: {
        strMeal: name,
      },
    });
    return !dbData ? null : dbData;
  }

  async findByFirstLetter(letter: string): Promise<IMeals[]> {
    const dbData = await this.model.findAll({
      where: {
        strMeal: {
          [Op.like]: `${letter}%`,
        },
      },
    });
    return dbData;
  }

  async findRandom(): Promise<IMeals[]> {
    const dbData = await this.model.findAll({
      order: this.model.sequelize?.random(), 
    });
    return dbData;
  }

  // async getAllCategories(): Promise<string[]> {
  //   const dbData = await this.model.findAll({
  //     attributes: ['strCategory'],
  //     raw: true,
  //   });
  //   return dbData.map(item => item.strCategory);
  // }

  async getAllCategories(): Promise<{ meals: { strCategory: string }[] }> {
    const dbData = await this.model.findAll({
      attributes: ['strCategory'],
      raw: true,
    });
  
    const uniqueCategories = new Set<string>();
  
    dbData.forEach(item => {
      uniqueCategories.add(item.strCategory);
    });
  
    const result = Array.from(uniqueCategories).map(category => ({
      strCategory: category,
    }));
  
    return { meals: result };
  }
  
  
  async getAllAreas(): Promise<string[]> {
    const dbData = await this.model.findAll({
      attributes: ['strArea'],
      raw: true,
    });
    return dbData.map(item => item.strArea);
  }

  async findByCategory(category: string): Promise<IMeals[] | null > {
    const dbData = await this.model.findAll({
      where: {
        strCategory: category,
      },
      raw: true,
    });
    return dbData;
  }

  async findByArea(area: string): Promise<IMeals[] | null > {
    const dbData = await this.model.findAll({
      where: {
        strArea: area,
      },
      raw: true,
    });
    return dbData;
  }

  async getAllNames(): Promise<string[]> {
    const dbData = await this.model.findAll({
      attributes: ['strMeal'],
      raw: true,
    });
    return dbData.map(item => item.strMeal);
  }

  async findByIngredient(ingredient: string): Promise<IMeals[]> {
    const meals = await this.model.findAll({
      where: {
        [Op.or]: Array.from({ length: 15 }, (_, i) => ({
          [`strIngredient${i + 1}`]: ingredient
        }))
      },
      raw: true,
    });
    return meals;
  }
 
}