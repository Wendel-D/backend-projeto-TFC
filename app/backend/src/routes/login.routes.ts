import { Request, Response, Router } from 'express';
import {emailValidate, passwordValidate} from '../middlewares/login.validate';
import LoginController from '../controller/users.controller';

const router = Router();

const loginController = new LoginController()

router.post('/', emailValidate, passwordValidate, (req: Request, res: Response) => {
    loginController.login(req, res);
})

export default router;
