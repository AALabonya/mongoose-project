import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFAcultyIntoBD = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcedamicFacultyIntoBD= async()=>{
    const result =
}


export const AcademicFacultyService = {
  createAcademicFAcultyIntoBD,
};
