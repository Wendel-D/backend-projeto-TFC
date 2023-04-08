import { Router, Request, Response } from 'express';
import LeaderboardController from '../controller/leaderboard.controller';


const leaderboardController = new LeaderboardController()
const router = Router();

router.get('/home',(req: Request, res: Response) => {
    leaderboardController.getAll(req, res);
});

export default router;
