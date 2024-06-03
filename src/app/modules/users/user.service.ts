import config from '../../config';
import { academicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interfaces';

import { Student } from '../student/student.model';

import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utiles';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await academicSemester.findById(
    payload.admissionSemester,
  );

  console.log('hello', admissionSemester);

  try {
    //set  generated id
    userData.id = await generateStudentId(admissionSemester);

    // create a user
    const newUser = await User.create(userData);

    //create a student
    if (Object.keys(newUser).length) {
      // set id , _id as user
      payload.id = newUser.id;
      payload.user = newUser._id; //reference _id

      const newStudent = await Student.create(payload);
      return newStudent;
    }
  } catch (error) {
    console.log(error);
  }
};

export const UserServices = {
  createStudentIntoDB,
};
