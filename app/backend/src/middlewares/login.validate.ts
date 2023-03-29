import { NextFunction, Request, Response } from "express";
const Joi = require('joi')

const emailValidate = (req: Request, res: Response, next: NextFunction) => {
        const {email} = req.body
        if (!email) {
            throw new Error('O campo e-mail é obrigatório');
        }
        const validation = Joi.string().email({ tlds: { allow: false } });

        if (!validation) {
            throw new Error("Email inválido");
        }
        next()
};

export default emailValidate;