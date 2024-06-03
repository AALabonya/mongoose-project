import { academicsSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicsSemesterIntoBD = async (payload: TAcademicSemester) => {
  //here maping chalabo data save korar age if block diye check korbo

  if (academicsSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllAcademicsSemesterIntoBD = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicsSemesterIntoBD = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};
const updateAcademicsSemesterIntoBD = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicsSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const AcademicSemesterServices = {
  createAcademicsSemesterIntoBD,
  getAllAcademicsSemesterIntoBD,
  getSingleAcademicsSemesterIntoBD,
  updateAcademicsSemesterIntoBD,
};
