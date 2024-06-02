import express from 'express';

import validateRequest from '../../middlwares/validateRequest';
import { AcademicDepartmentControllers } from './academicDepartment.controllers';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();
router.get(
  '/:academicId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);
router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);

router.patch(
  '/:academicId',
  validateRequest(
    AcademicDepartmentValidation.updatedAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
);
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartment);

export const AcademicDepartmentRoutes = router;
