import { NextFunction, Request, Response } from 'express';
// import * as Joi from 'joi';

const emailValidate = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  const validation = /^\S+@\S+\.\S+$/;

  if (!email.match(validation)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

const passwordValidate = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export {
  emailValidate,
  passwordValidate,
};
