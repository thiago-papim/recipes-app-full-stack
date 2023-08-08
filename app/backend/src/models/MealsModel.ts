import SequelizeMealsModel from '../database/models/SequelizeMealsModel';
import { IMeals } from '../Interfaces/IMeals';
import { MealsModelType } from '../Interfaces/IMeals';

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
}