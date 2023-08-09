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

  async findById(id: IMeals['idMeal']): Promise<IMeals | null> {
    const dbData = await this.model.findByPk(id);
    return dbData;
  }

  async findByName(name: string): Promise<IMeals | null > {
    const dbData = await this.model.findOne({
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

  async getAllCategories(): Promise<string[]> {
    const dbData = await this.model.findAll({
      attributes: ['strCategory'],
      raw: true,
    });
    return dbData.map(item => item.strCategory);
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
  
}