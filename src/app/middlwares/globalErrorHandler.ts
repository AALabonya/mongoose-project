/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
//global error handler

import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodIssue } from 'zod';

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
  const handleZodError = (err: ZodError) => {
    const errorSource: TErrorSource = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue.message,
      };
    });

    const statusCode = 400;
  };
  return {
    statusCode,
    message: 'Zod Validation Error',
    errorSource,
  };
};

export default globalErrorHandler;
