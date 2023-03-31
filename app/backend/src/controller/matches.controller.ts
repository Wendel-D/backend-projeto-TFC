import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

class MatchesController {
  constructor(private _service = new MatchesService()) { }

  getAll = async (_req:Request, res: Response) => {
    const teams = await this._service.getAll();
    return res.status(200).json(teams);
  };
}

export default MatchesController;
