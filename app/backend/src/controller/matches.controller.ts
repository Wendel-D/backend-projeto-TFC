import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

class MatchesController {
  constructor(private _service = new MatchesService()) { }

  getAll = async (req:Request, res: Response) => {
    const { inProgress } = req.query;

    if (inProgress === undefined) {
      const teams = await this._service.getAll();
      return res.status(200).json(teams);
    }

    const isInProgress = await this._service.filterByProgress(String(inProgress));
    return res.status(200).json(isInProgress);
  };
}

export default MatchesController;
