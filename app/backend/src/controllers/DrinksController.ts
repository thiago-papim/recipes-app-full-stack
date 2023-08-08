import { Request, Response } from "express";
import DrinksService from "../services/DrinksService";

export default class DrinksController {
  constructor(
    private drinksService = new DrinksService(),
  ) { }

  public async findAll(req: Request, res: Response) {
    const { q } = req.query;
    const serviceResponse = await this.drinksService.findAll();
    res.status(200).json(serviceResponse);
  }

  public async findById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.drinksService.findById(Number(id));
    res.status(200).json(serviceResponse);
  }
}