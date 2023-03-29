import { ModelStatic } from 'sequelize';
import * as bcryptjs from 'bcryptjs';
import UsersModel from '../database/models/Users.model';
import { ILogin } from '../interfaces/ILogin';
import { token } from '../utils/token';

class UsersService {
  protected model: ModelStatic<UsersModel> = UsersModel;

  login = async (loginInfo: ILogin): Promise<string | null> => {
    const data = await this.model.findOne({ where: { email: loginInfo.email } });
    if (!data) return null;
    const cripto = bcryptjs.compareSync(loginInfo.password, data.password);
    if (!cripto) return null;

    const { id, username, role, email } = data;
    const tokenGen = token({ id, username, role, email });
    return tokenGen;
  };
}

export default UsersService;
