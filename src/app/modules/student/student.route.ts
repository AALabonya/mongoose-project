import express from 'express';
import { StudentControllers } from './student.controllers';

const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);
router.patch('/:studentId', StudentControllers.updateStudent);
router.delete('/:studentId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

export const StudentRoutes = router;
