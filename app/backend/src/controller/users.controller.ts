import { Request, Response } from 'express';
import UsersService from '../services/users.service';

class UsersController {
  constructor(private _service = new UsersService()) {}

  login = async (req: Request, res: Response) => {
    const loginInfo = req.body;

    const token = await this._service.login(loginInfo);
    if (token === null) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    return res.status(200).json({ token });
  };

  getRoles = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const { userToken } = req.body;

    if (authorization) {
      return res.status(200).json({ role: userToken.role });
    }
  };
}

export default UsersController;
