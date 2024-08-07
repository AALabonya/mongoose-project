import QueryBuilder from '../../builder/QueryBuilder';
import {
  AcademicSemesterSearchableFields,
  academicsSemesterNameCodeMapper,
} from './academicSemester.constant';
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

const getAllAcademicsSemesterIntoBD = async (
  query: Record<string, unknown>,
) => {
  const academicSemesterQuery = new QueryBuilder(AcademicSemester.find(), query)
    .search(AcademicSemesterSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await academicSemesterQuery.modelQuery;
  const meta = await academicSemesterQuery.countTotal();

  return {
    meta,
    result,
  };
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
