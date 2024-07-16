import express from 'express';
import { AcademicsSemesterControllers } from './academicsSemester.controllers';
import { AcademicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middlwares/validateRequest';
import auth from '../../middlwares/auth';

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

router.patch(
  '/:academicId',
  validateRequest(
    AcademicSemesterValidation.updateAcademicSemesterValidationSchema,
  ),
  AcademicsSemesterControllers.updateAcademicSemester,
);
router.get(
  '/',
  auth('admin'),
  AcademicsSemesterControllers.getAllAcademicsSemester,
);

export const AcademicSemesterRoutes = router;
