import express from 'express';
import { AcademicsSemesterControllers } from './academicsSemester.controllers';

const router = express.Router();

router.post(
  '/create-academic-semester',
  AcademicsSemesterControllers.createAcademicsSemester,
);

export const AcademicSemesterRouter = router;
