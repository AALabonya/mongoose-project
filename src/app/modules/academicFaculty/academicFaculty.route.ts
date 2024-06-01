import express from 'express';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import validateRequest from '../../middlwares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();
router.get('/:facultyId', AcademicFacultyControllers.createAcademicFaculty);
router.post(
  '/create-academic-faculty',
  validateRequest(AcademicFacultyValidation.academicValidationSchema),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.patch(
  '/:academicId',
  validateRequest(
    AcademicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  AcademicsSemesterControllers.updateAcademicSemester,
);
router.get('/', AcademicFacultyControllers.getSingleAcademicFaculty);

export const AcademicSemesterRoutes = router;
