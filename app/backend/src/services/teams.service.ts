import { ModelStatic } from 'sequelize';
import Teams from '../database/models/Teams.model';
import { ITeam } from '../interfaces/ITeams';

class TeamsService {
  protected model: ModelStatic<Teams> = Teams;

  async getAll(): Promise<ITeam[]> {
    return this.model.findAll();
  }

  async getById(id: string): Promise<ITeam | null> {
    return this.model.findByPk(Number(id));
  }
}

export default TeamsService;
