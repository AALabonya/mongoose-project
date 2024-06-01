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

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAllAcademicFacultyIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty are retrieved succesfully',
    data: result,
  });
});
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { academicId } = req.params;

  const result =
    await AcademicFacultyService.getSingleAcademicFacultyIntoDB(academicId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student are retrieved succesfully',
    data: result,
  });
});
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { academicId } = req.params;
  const result = await AcademicSemesterServices.updateAcademicsSemesterIntoBD(
    academicId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is updated successfully',
    data: result,
  });
});
export const AcademicsSemesterControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
