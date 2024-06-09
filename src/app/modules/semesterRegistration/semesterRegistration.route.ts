import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { SemesterRegistrationValidations } from './semesterRegistration.validation';
import { SemesterRegistrationControllers } from './semesterRegistration.controller';

const router = express.Router();

router.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegistrationValidations.createSemesterRegistrationValidationSchema,
  ),
);

router.get(
  '/:id',
  SemesterRegistrationControllers.getSingleSemesterRegistration,
);

router.patch(
  '/:id',
  validateRequest(SemesterRegistrationValidations.updateCourseValidationSchema),
  SemesterRegistrationControllers.updateSemesterRegistration,
);

router.delete(
  '/:id',
  SemesterRegistrationControllers.deleteSemesterRegistration,
);

router.get('/', SemesterRegistrationControllers.getAllSemesterRegistration);

export const CourseRoutes = router;
