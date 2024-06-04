/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
//global error handler

import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  type TErrorSource = {
    path: string | number;
    message: string;
  }[];

  let errorSource = {
    path: '',
    message: 'Something went wrong',
  };

  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
