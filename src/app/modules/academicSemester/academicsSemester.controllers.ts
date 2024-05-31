import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';

const createAcademicsSemester = catchAsync(async (req, res) => {
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academics Semester create Successfully',
    data: result,
  });
});

export const AcademicsSemesterControllers = {
  createAcademicsSemester,
};
