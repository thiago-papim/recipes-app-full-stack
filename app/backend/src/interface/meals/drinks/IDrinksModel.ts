import { IDrinks } from "./IDrinks";

export interface IDrinksModel {
  findAll(): Promise<IDrinks[]>,
  findById(id: IDrinks['idDrink']): Promise<IDrinks | null>
}