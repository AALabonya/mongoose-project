import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFAcultyIntoBD = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultyIntoBD = async () => {
  const result = await AcademicFaculty.find();
  return result;
};
const getSingleAcademicFacultyIntoBD = async () => {
  const result = await AcademicFaculty.find();
  return result;
};
export const AcademicFacultyService = {
  createAcademicFAcultyIntoBD,
  getAllAcademicFacultyIntoBD,
  getSingleAcademicFacultyIntoBD,
};
