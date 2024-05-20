import { Request, Response } from 'express';
import { StudentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  const student = req.body;

  //will call service func to send this data

  const result = await StudentService.createStudentIntoDB(student);

  //send response
  res.status(200).json({
    success: true,
    message: 'Student is created successfully',
  });
};
