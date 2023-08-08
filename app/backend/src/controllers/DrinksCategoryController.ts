import { Request, Response } from "express";
import DrinksCategoryService from "../services/DrinksCategoryService";

export default class DrinksCategoryController {
  constructor(
    private drinksCategoryService = new DrinksCategoryService(),
  ) { }

  public async findAll(req: Request, res: Response) {
    const serviceResponse = await this.drinksCategoryService.findAll();
    const newResponse = serviceResponse.map(({ strCategory }) => ({ strCategory }))
    res.status(200).json({ drinks: newResponse });
  }
}