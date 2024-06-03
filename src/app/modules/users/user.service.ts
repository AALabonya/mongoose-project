import mongoose from 'mongoose';
import config from '../../config';
import { academicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interfaces';

import { Student } from '../student/student.model';

import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utiles';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';

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

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateStudentId(admissionSemester);

    // create a user
    const newUser = await User.create([userData], { session });

    //create student
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    const newStudent = await Student.create([payload], { session });
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
    // //create a student
    // if (Object.keys(newUser).length) {
    //   // set id , _id as user
    //   payload.id = newUser.id;
    //   payload.user = newUser._id; //reference _id

    //   const newStudent = await Student.create(payload);
    //   return newStudent;
    // }
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const UserServices = {
  createStudentIntoDB,
};
