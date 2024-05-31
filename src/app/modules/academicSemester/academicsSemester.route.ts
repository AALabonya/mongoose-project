import express from 'express';
import { AcademicsSemesterControllers } from './academicsSemester.controllers';
import { AcademicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middlwares/validateRequest';

const router = express.Router();
router.get(
  '/:academicId',
  AcademicsSemesterControllers.getSingleAcademicsSemester,
);
router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicsSemesterControllers.createAcademicsSemester,
);

router.get('/', AcademicsSemesterControllers.getAllAcademicsSemester);

export const AcademicSemesterRoutes = router;
