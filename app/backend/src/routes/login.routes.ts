import { Request, Response, Router } from 'express';
import { emailValidate, passwordValidate } from '../middlewares/login.validate';
import LoginController from '../controller/users.controller';
import tokenValidateMid from '../middlewares/token.validate';

const router = Router();

const loginController = new LoginController();

router.post('/', emailValidate, passwordValidate, (req: Request, res: Response) => {
  loginController.login(req, res);
});

router.get('/role', tokenValidateMid, (req: Request, res: Response) => {
  loginController.getRoles(req, res);
});

export default router;
