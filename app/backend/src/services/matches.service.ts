import { ModelStatic, Op } from 'sequelize';
import Matches from '../database/models/Matches.model';
import Teams from '../database/models/Teams.model';

class MatchesService {
  protected model: ModelStatic<Matches> = Matches;

  async getAll(): Promise<Matches[]> {
    return this.model.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
  }

  async filterByProgress(inProgress: string):Promise<Matches[]> {
    let progress;
    if (inProgress === 'true') {
      progress = true;
    }
    if (inProgress === 'false') {
      progress = false;
    }

    return this.model.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
      where: { [Op.and]: [{ inProgress: progress }] },
    });
  }

  async updateGoals(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<number[]> {
    return this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }

  async patchFinish(id: number) : Promise<number[]> {
    return this.model.update({ inProgress: false }, { where: { id } });
  }
}

export default MatchesService;
