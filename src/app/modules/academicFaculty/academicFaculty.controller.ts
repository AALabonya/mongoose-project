import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { AcademicFacultyService } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.createAcademicFAcultyIntoDB(
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
  const result = await AcademicFacultyService.getAllAcademicFacultyIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty are retrieved succesfully',
    data: result,
  });
});

export const AcademicsSemesterControllers = {
  createAcademicFaculty,
  getAllAcademicsSemester,
  getSingleAcademicsSemester,
  updateAcademicSemester,
};
