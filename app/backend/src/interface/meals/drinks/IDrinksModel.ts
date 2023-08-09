import { IDrinks } from "./IDrinks";

export interface IDrinksModel {
  findByName(name: IDrinks['strDrink']): Promise<IDrinks[] | null>;
  findByLetter(name: IDrinks['strDrink']): Promise<IDrinks[] | null>;
  findByIngredient(ingredient: IDrinks['strDrink']): Promise<IDrinks[] | null>;
  findByRandom(): Promise<IDrinks>;
  findByCategory(category: IDrinks['strCategory']): Promise<IDrinks[] | null>;
}