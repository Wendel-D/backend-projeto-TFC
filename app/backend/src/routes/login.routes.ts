import { Request, Response, Router } from 'express';
import emailValidate from '../middlewares/login.validate';
import LoginController from '../controller/login.controller';

const router = Router();

const loginController = new LoginController()

router.post('/', emailValidate, (req: Request, res: Response) => {
    loginController
})

export default router;
