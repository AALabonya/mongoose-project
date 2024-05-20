import express from 'express';
import { StudentControllers } from './student.controllers';

const router = express.Router();

//we call controller function
router.post('/create-student', StudentControllers.createStudent);

export const StudentRoutes = router;
