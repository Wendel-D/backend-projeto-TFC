import { ModelStatic } from 'sequelize';
import Teams from '../database/models/Teams.model';
import { ITeam } from '../interfaces/ITeams';

class TeamsService {
  protected model: ModelStatic<Teams> = Teams;

  async getAll(): Promise<ITeam[]> {
    return this.model.findAll();
  }
}

export default TeamsService;
