import express from 'express';
import { AcademicsSemesterControllers } from './academicsSemester.controllers';
import { AcademicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middlwares/validateRequest';

const router = express.Router();
router.get(
  '/:semesterId',
  AcademicsSemesterControllers.getSingleAcademicsSemester,
);
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
