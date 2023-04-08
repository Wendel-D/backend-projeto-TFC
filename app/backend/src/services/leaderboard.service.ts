import allTeams from '../utils/teamsQuery';
import Model from '../database/models';
import ILeaderboard from '../interfaces/ILeaderboard';

class LeaderboardService {
  protected model = Model;

  async getAll(): Promise<ILeaderboard[]> {
    const [results] = await this.model.query(allTeams);
    return results as ILeaderboard[];
  }
}

export default LeaderboardService;
