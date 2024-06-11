import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistration } from './semesterRegistration.model';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import QueryBuilder from '../../builder/QueryBuilder';
import { RegistrationStatus } from './semesterRegistration.constant';

const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  /**
   * Step1: Check if there any registered semester that is already 'UPCOMING'|'ONGOING'
   * Step2: Check if the semester is exist
   * Step3: Check if the semester is already registered!
   * Step4: Create the semester registration
   */
  const academicSemester = payload?.academicSemester;
  //check if there any registered semester that is already 'UPCOMING'|'ONGOING'
  const isThereAnyUpcomingOrOngoingSEmester =
    await SemesterRegistration.findOne({
      $or: [
        { status: RegistrationStatus.UPCOMING },
        { status: RegistrationStatus.ONGOING },
      ],
    });

  if (isThereAnyUpcomingOrOngoingSEmester) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `There is already an ${isThereAnyUpcomingOrOngoingSEmester.status} registered semester !`,
    );
  }

  // check if the semester is exist
  const isAcademicSemesterExists =
    await AcademicSemester.findById(academicSemester);

  if (!isAcademicSemesterExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This academic semester not found !',
    );
  }
  // check if the semester is already registered!
  const isSemesterRegistrationExists = await SemesterRegistration.findOne({
    academicSemester,
  });

  if (isSemesterRegistrationExists) {
    throw new AppError(
      httpStatus.CONFLICT,
      'This semester is already registered!',
    );
  }

  const result = await SemesterRegistration.create(payload);
  return result;
};

const getAllSemesterRegistrationFromDB = async (
  query: Record<string, unknown>,
) => {
  const semesterRegistrationQuery = new QueryBuilder(
    SemesterRegistration.find().populate('academicSemester'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await semesterRegistrationQuery.modelQuery;
  return result;
};
const getSingleSemesterRegistrationFromDB = async (id: string) => {
  const result = await SemesterRegistration.findById(id);

  return result;
};

const updateSemesterRegistrationIntoDB = async (
  id: string,
  payload: Partial<TSemesterRegistration>,
) => {
  //check if the requested registered semester is exists
  // check if the semester is already registered!
  const isSemesterRegistrationExists = await SemesterRegistration.findById(id);
   const requestedStatus= payload?.status
  if (!isSemesterRegistrationExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'This semester is not found!',
    );
  }
  //if the requested semester registration is ended, we will not update anything

  const currentRequesteSemesterStatus = isSemesterRegistrationExists?.status
   
  if(currentRequesteSemesterStatus === 'ENDED'){
    throw new AppError(httpStatus.BAD_REQUEST, `This semester is already ${currentRequesteSemesterStatus}`)
  }

  //UPCOMING ---> ONGOING---> ENDED
  if(currentRequesteSemesterStatus ===RegistrationStatus.UPCOMING && requestedStatus === RegistrationStatus.ENDED){
    throw new AppError(
      httpStatus.NOT_FOUND,
      `You can not directly change status from ${currentRequesteSemesterStatus} to ${requestedStatus}`,
    );
  }

  if(currentRequesteSemesterStatus === RegistrationStatus.ONGOING && requestedStatus === RegistrationStatus.UPCOMING){
    throw new AppError(
      httpStatus.NOT_FOUND,
      `You can not directly change status from ${currentRequesteSemesterStatus} to ${requestedStatus}`,
    );
  }

  const result = await SemesterRegistration.findByIdAndUpdate(id, payload,{
    new:true,
    runValidators:true
  })

  return result
  }
  const deleteSemesterRegistrationFromDB = async (id: string) => {
    /** 
    * Step1: Delete associated offered courses.
    * Step2: Delete semester registraton when the status is 
    'UPCOMING'.
    **/
  
    // checking if the semester registration is exist
    const isSemesterRegistrationExists = await SemesterRegistration.findById(id);
  
    if (!isSemesterRegistrationExists) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        'This registered semester is not found !',
      );
    }
  
    // checking if the status is still "UPCOMING"
    const semesterRegistrationStatus = isSemesterRegistrationExists.status;
  
    if (semesterRegistrationStatus !== 'UPCOMING') {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        `You can not update as the registered semester is ${semesterRegistrationStatus}`,
      );
    }
  
    const session = await mongoose.startSession();
  
    //deleting associated offered courses
  
    try {
      session.startTransaction();
  
      const deletedOfferedCourse = await OfferedCourse.deleteMany(
        {
          semesterRegistration: id,
        },
        {
          session,
        },
      );
  
      if (!deletedOfferedCourse) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          'Failed to delete semester registration !',
        );
      }
  
      const deletedSemisterRegistration =
        await SemesterRegistration.findByIdAndDelete(id, {
          session,
          new: true,
        });
  
      if (!deletedSemisterRegistration) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          'Failed to delete semester registration !',
        );
      }
  
      await session.commitTransaction();
      await session.endSession();
  
      return null;
    } catch (err: any) {
      await session.abortTransaction();
      await session.endSession();
      throw new Error(err);
    }
  };
export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationFromDB,
  getSingleSemesterRegistrationFromDB,
  updateSemesterRegistrationIntoDB,
  deleteSemesterRegistrationFromDB,
};
