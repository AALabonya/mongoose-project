import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { AcademicFacultyService } from './academicFaculty.service';

const createAcademicsSemester = catchAsync(async (req, res) => {
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

export const AcademicsSemesterControllers = {
  createAcademicsSemester,
  getAllAcademicsSemester,
  getSingleAcademicsSemester,
  updateAcademicSemester,
};
