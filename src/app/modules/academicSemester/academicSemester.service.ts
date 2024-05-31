import { TAcademicSemesterCode } from './academicSemester.interface';
import { academicSemester } from './academicSemester.model';

const createAcademicsSemesterIntoBD = async (
  payload: TAcademicSemesterCode,
) => {
  //here checking relation
  //semester name --->semester code relation ase kina check korbo

  type TAcademicsSemesterNameCodeMapper = {
    Autumn: '01';
    Summer: '02';
    Fall: '03';
  };

  const academicsSemesterNameCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };

  const result = await academicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicsSemesterIntoBD,
};
