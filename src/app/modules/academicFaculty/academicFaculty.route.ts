import express from 'express';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import validateRequest from '../../middlwares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();
router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty);
router.post(
  '/create-academic-faculty',
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.patch(
  '/:facultyId',
  validateRequest(
    AcademicFacultyValidation.updatedAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.updateAcademicFaculty,
);
router.get('/', AcademicFacultyControllers.getAllAcademicFaculty);

export const AcademicFacultyRoutes = router;
