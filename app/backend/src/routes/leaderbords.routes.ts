import { Router, Request, Response } from 'express';
import LeaderboardController from '../controller/leaderboard.controller';

const leaderboardController = new LeaderboardController();
const router = Router();

router.get('/', (req: Request, res: Response) => {
  leaderboardController.getAll(req, res);
});

router.get('/home', (req: Request, res: Response) => {
  leaderboardController.filterHome(req, res);
});

router.get('/away', (req: Request, res: Response) => {
  leaderboardController.getAway(req, res);
});

export default router;
