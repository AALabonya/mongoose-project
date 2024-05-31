//asynchronous code ar jonno akta higher order function create kori

import { NextFunction, Request, RequestHandler, Response } from 'express';

//jehetu akta function receive (fn) korse abong arekta funtion return korse tai aita k higer order function bole

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
