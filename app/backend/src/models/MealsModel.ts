import SequelizeMealsModel from '../database/models/SequelizeMealsModel';
import { IMeals } from '../Interfaces/IMeals';
import { MealsModelType } from '../Interfaces/IMeals';
const { Op } = require('sequelize');


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
}