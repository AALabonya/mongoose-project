import { StudentModel } from '../student.model';
import { Student } from './student.interfaces';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
