import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

const emailValidate = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  const validation = Joi.string().email({ tlds: { allow: false } });

  if (!validation) {
    throw new Error('Email inválido');
  }
  next();
};

const passwordValidate = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (password.length < 6) {
    return res.status(401).json({ message: 'Mínimo de 6 caracteres exigidos' });
  }
  next();
};

export {
  emailValidate,
  passwordValidate,
};
