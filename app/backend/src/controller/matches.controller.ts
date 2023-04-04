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

  updateGoals = async (req:Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const result = await this._service.updateGoals(Number(id), homeTeamGoals, awayTeamGoals);
    res.status(200).json(result);
  };

  patchFinish = async (req:Request, res: Response) => {
    const { id } = req.params;
    const finished = await this._service.patchFinish(Number(id));
    res.status(200).json(finished);
  };

  createMatches = async (req:Request, res: Response) => {
    const { homeTeamId, awayTeamId } = req.body;

    if (homeTeamId === awayTeamId) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams' });
    }

    const result = await this._service.createMatches(req.body);

    if (result.message) {
      return res.status(404).json({ message: result.message });
    }

    res.status(201).json(result);
  };
}

export default MatchesController;
