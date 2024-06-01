import express from 'express';
import { AcademicFacultyControllers } from './academicFaculty.controller';

const router = express.Router();
router.get('/:facultyId', AcademicFacultyControllers.createAcademicFaculty);
router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicsSemesterControllers.createAcademicsSemester,
);

router.patch(
  '/:academicId',
  validateRequest(
    AcademicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  AcademicsSemesterControllers.updateAcademicSemester,
);
router.get('/', AcademicsSemesterControllers.getAllAcademicsSemester);

export const AcademicSemesterRoutes = router;
