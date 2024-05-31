import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicsSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicsSemesterIntoBD(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academics Semester is created Successfully',
    data: result,
  });
});

const getAllAcademicsSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicsSemesterIntoBD();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student are retrieved succesfully',
    data: result,
  });
});

const getSingleAcademicsSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await AcademicSemesterServices.getSingleAcademicsSemesterIntoBD(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student are retrieved succesfully',
    data: result,
  });
});
export const AcademicsSemesterControllers = {
  createAcademicsSemester,
  getAllAcademicsSemester,
  getSingleAcademicsSemester,
};
