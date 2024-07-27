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
  const result = await AcademicSemesterServices.getAllAcademicsSemesterIntoBD(
    req.query,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semesters are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleAcademicsSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;

  const result =
    await AcademicSemesterServices.getSingleAcademicsSemesterIntoBD(semesterId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is retrieved succesfully',
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
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
  createAcademicsSemester,
  getAllAcademicsSemester,
  getSingleAcademicsSemester,
  updateAcademicSemester,
};
