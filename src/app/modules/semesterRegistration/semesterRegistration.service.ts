import { TSemesterRegistration } from './semesterRegistration.interface';

const createSemesterRegistrationIntoDB = async (
  payload: TSemesterRegistration,
) => {
  //check if the semester is exist
};
const getAllSemesterRegistrationFromDB = async () => {};
const getSingleSemesterRegistrationFromDB = async () => {};
const updateSemesterRegistrationIntoDB = async () => {};

export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationFromDB,
  getSingleSemesterRegistrationFromDB,
  updateSemesterRegistrationIntoDB,
};
