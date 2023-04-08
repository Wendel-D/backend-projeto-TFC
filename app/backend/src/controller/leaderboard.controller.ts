import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';

class LeaderboardController {
  constructor(private _service = new LeaderboardService()) { }

  getAll = async (_req: Request, res: Response) => {
    const data = await this._service.getAll();
    return res.status(200).json(data);
  };

  filterHome = async (_req: Request, res: Response) => {
    const data = await this._service.filterHome();
    return res.status(200).json(data);
  };

  getAway = async (_req: Request, res: Response) => {
    const data = await this._service.getAway();
    return res.status(200).json(data);
  };
}

export default LeaderboardController;
