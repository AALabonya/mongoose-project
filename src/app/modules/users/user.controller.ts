import { UserServices } from './user.service';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';

const createUser = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  // const zodParseData = UserValidation.userValidationSchema.parse(studentData);

  //will call service func to send this data

  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};
