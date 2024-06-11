import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";

const createAuth = catchAsync(async (req: Request, res: Response) => {
    // const result = await(
    //   req.body,
    // );
    // sendResponse(res, {
    //   statusCode: httpStatus.OK,
    //   success: true,
    //   message: 'Offered Course is created successfully !',
    //   data: result,
    // });
  });

  export const AuthControllers = {
    createAuth
  };