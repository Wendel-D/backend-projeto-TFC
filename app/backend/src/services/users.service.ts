import { ModelStatic } from "sequelize";
import * as bcryptjs from 'bcryptjs'
import UsersModel from '../database/models/Users.model';
import { ILogin } from "../interfaces/ILogin";

class UsersService {
    protected model: ModelStatic<UsersModel> = UsersModel

    login = async (loginInfo: ILogin): Promise<string | null> => {
        const data = await this.model.findOne({where: {email: loginInfo.email}});
        if (!data) return null;
        const cripto = bcryptjs.compareSync(loginInfo.password, data.password)
        if (!cripto) return null;
        
        return token
    }
}

export default UsersService;