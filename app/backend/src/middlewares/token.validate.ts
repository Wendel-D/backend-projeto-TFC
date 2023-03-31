import { NextFunction, Request, Response } from 'express';
import { tokenValidate } from '../utils/token';

const tokenValidateMid = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const validation = tokenValidate(authorization);
    req.body.userToken = validation;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default tokenValidateMid;
