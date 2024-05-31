import { TAcademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemester.model';

const createAcademicsSemesterIntoBD = async (payload: TAcademicSemester) => {
  //here checking relation
  //semester name --->semester code relation ase kina check korbo

  type TAcademicsSemesterNameCodeMapper = {
    //typescript object maptype
    [key: string]: string;
  };

  const academicsSemesterNameCodeMapper: TAcademicsSemesterNameCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };
  //here maping chalabo data save korar age if block diye check korbo
  if (academicsSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }
  const result = await academicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicsSemesterIntoBD,
};
