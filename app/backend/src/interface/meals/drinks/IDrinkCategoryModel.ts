import { IDrinksCategory } from "./IDrinksCategory";

export interface IDrinksCategoryModel {
  findAll(): Promise<IDrinksCategory[]>
}