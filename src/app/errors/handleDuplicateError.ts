import mongoose from 'mongoose';
import { TErrorSource, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err): TGenericErrorResponse => {
  const errorSources: TErrorSource = [{ path: err.path, message: err.message }];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleDuplicateError;
