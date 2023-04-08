import allTeams from '../utils/teamsQuery';
import Model from '../database/models';
import ILeaderboard from '../interfaces/ILeaderboard';
import homeQuery from '../utils/homeQuery';
import awayQuery from '../utils/awayQuery';

class LeaderboardService {
  protected model = Model;

  async getAll(): Promise<ILeaderboard[]> {
    const [results] = await this.model.query(allTeams);
    return results as ILeaderboard[];
  }

  async filterHome(): Promise<ILeaderboard[]> {
    const [results] = await this.model.query(homeQuery);
    return results as ILeaderboard[];
  }

  async getAway(): Promise<ILeaderboard[]> {
    const [results] = await this.model.query(awayQuery);
    return results as ILeaderboard[];
  }
}

export default LeaderboardService;
