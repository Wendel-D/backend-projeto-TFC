import { Request, Response, Router } from 'express';
import MatchesController from '../controller/matches.controller';
import tokenValidateMid from '../middlewares/token.validate';

const router = Router();

const matchesController = new MatchesController();

router.get('/', (req: Request, res: Response) => {
  matchesController.getAll(req, res);
});

router.patch('/:id/finish', tokenValidateMid, (req: Request, res: Response) => {
  matchesController.patchFinish(req, res);
});

export default router;
