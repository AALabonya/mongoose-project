import httpStatus from 'http-status';

import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { SemesterRegistrationServices } from './semesterRegistration.service';

const getSingleSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRegistrationServices.getSingleSemesterRegistrationFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration is retrieved successfully',
    data: result,
  });
});

const getAllSemesterRegistration = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationServices.getAllSemesterRegistrationFromDB(
      req.query,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration are retrieved successfully',
    data: result,
  });
});

const updateSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { faculty } = req.body;
  const result =
    await SemesterRegistrationServices.updateSemesterRegistrationFromDB(
      id,
      faculty,
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration is updated successfully',
    data: result,
  });
});

const deleteSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRegistrationServices.deleteSemesterRegistrationFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration is deleted successfully',
    data: result,
  });
});

export const FacultyControllers = {
  getAllSemesterRegistration,
  getSingleSemesterRegistration,
  deleteSemesterRegistration,
  updateSemesterRegistration,
};
