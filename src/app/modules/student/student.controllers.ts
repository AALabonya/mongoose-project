import { Request, Response } from 'express';
import { StudentService } from './student.service';
import { Student } from './student.interfaces';
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body.student;
    console.log(studentData);

    //will call service func to send this data

    const result = await StudentService.createStudentIntoDB(studentData);

    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
};
