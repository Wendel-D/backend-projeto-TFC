import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

class TeamsController {
  constructor(private _service = new TeamsService()) { }

  getAll = async (_req:Request, res: Response) => {
    const teams = await this._service.getAll();
    return res.status(200).json(teams);
  };
}

export default TeamsController;
