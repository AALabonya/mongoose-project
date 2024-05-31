import express from 'express';
import { AcademicsSemesterControllers } from './academicsSemester.controllers';
import { AcademicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middlwares/validateRequest';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicsSemesterControllers.createAcademicsSemester,
);

export const AcademicSemesterRouter = router;
