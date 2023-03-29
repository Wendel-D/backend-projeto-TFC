import * as jwt from 'jsonwebtoken'
import { IUsers } from '../interfaces/IUsers'

const tokenSecret: jwt.Secret = process.env.JWT_SECRET || 'jwt_secret';

const config: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const token = (payload: IUsers) => jwt.sign(payload, tokenSecret, config);

const tokenValidate = (token: string) => jwt.verify(token, tokenSecret);

export {
    token,
    tokenValidate,
}