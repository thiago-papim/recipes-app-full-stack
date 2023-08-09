import { Request, Response } from "express";
import DrinksService from "../services/DrinksService";
import mapStatusHTTP from "../utils/mapStatusHTTP";

export default class DrinksController {
  constructor(
    private drinksService = new DrinksService(),
  ) { }

  public async findByName(req: Request, res: Response) {
    const { q } = req.query;
     if (typeof q === 'string') {
      const response = await this.drinksService.findByName(q);
      return res.status(mapStatusHTTP(response.status)).json( {drinks: response.data} );
    }
  }

  public async findById(req: Request, res: Response) {
    const { id } = req.params;
    const response = await this.drinksService.findById(Number(id));
    return res.status(mapStatusHTTP(response.status)).json( {drinks: [response.data]} );
  }

  public async findByLetter(req: Request, res: Response) {
    const { q } = req.query;
     if (typeof q === 'string') {
      const response = await this.drinksService.findByLetter(q);
      return res.status(mapStatusHTTP(response.status)).json( {drinks: response.data} );
    }
  }

  public async findByRandom(req: Request, res: Response) {
    const response = await this.drinksService.fyndByRandom();
    return res.status(mapStatusHTTP(response.status)).json(response.data);
  }

  public async findByIngredient(req: Request, res: Response) {
    const { q } = req.query;
     if (typeof q === 'string') {
      const response = await this.drinksService.findByIngredient(q);
      return res.status(mapStatusHTTP(response.status)).json( {drinks: response.data} );
    }
  }

  public async findByCategory(req: Request, res: Response) {
    const { q } = req.query;
     if (typeof q === 'string') {
      const response = await this.drinksService.findByCategory(q);
      return res.status(mapStatusHTTP(response.status)).json( {drinks: response.data} );
    }
  }
}