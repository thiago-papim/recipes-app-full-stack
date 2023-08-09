import { Request, Response } from "express";
import DrinksService from "../services/DrinksService";

export default class DrinksController {
  constructor(
    private drinksService = new DrinksService(),
  ) { }

  public async findByName(req: Request, res: Response) {
    const { q } = req.query;
     if (typeof q === 'string') {
      const serviceResponse = await this.drinksService.findByName(q);
      return res.status(200).json(serviceResponse);
    }
    return res.status(401).json({ message: 'Não encontrado '})
  }

  public async findByLetter(req: Request, res: Response) {
    const { q } = req.query;
     if (typeof q === 'string') {
      const serviceResponse = await this.drinksService.findByLetter(q);
      return res.status(200).json(serviceResponse);
    }
    return res.status(401).json({ message: 'Não encontrado '})
  }

  public async findByRandom(req: Request, res: Response) {
    const drink = await this.drinksService.fyndByRandom();
    return res.status(200).json(drink);
  }

  public async findByIngredient(req: Request, res: Response) {
    const { q } = req.query;
     if (typeof q === 'string') {
      const serviceResponse = await this.drinksService.findByIngredient(q);
      return res.status(200).json(serviceResponse);
    }
    return res.status(401).json({ message: 'Não encontrado '})
  }

  public async findByCategory(req: Request, res: Response) {
    const { q } = req.query;
     if (typeof q === 'string') {
      const serviceResponse = await this.drinksService.findByCategory(q);
      return res.status(200).json(serviceResponse);
    }
    return res.status(401).json({ message: 'Não encontrado '})
  }
}