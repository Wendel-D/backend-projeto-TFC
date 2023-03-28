import { Request, Response, Router } from 'express';
import TeamsController from '../controller/teams.controller';
import TeamsService from '../services/teams.service';

const router = Router();

const teamsService = new TeamsService();
const teamsConstroller = new TeamsController(teamsService);

router.get('/', (req: Request, res: Response) => {
  teamsConstroller.getAll(req, res);
});

export default router;
