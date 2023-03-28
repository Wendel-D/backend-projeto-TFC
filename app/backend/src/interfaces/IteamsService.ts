import { ITeam } from './ITeams';

export interface IteamsService {
  getAll(): Promise<ITeam[]>;
}
