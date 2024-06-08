import express from 'express';
import { StudentControllers } from './student.controllers';
import validateRequest from '../../middlwares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

router.get('/:id', StudentControllers.getSingleStudent);
router.patch(
  '/:id',
  validateRequest(updateStudentValidationSchema),

  StudentControllers.updateStudent,
);
router.delete('/:id', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
