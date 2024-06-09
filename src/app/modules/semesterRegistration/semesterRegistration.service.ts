

const createSemesterRegistrationIntoDB = async (payload: TAcademicFaculty) => {
  const result = await create(payload);
  return result;
};

const getAllSemesterRegistrationIntoDB = async () => {
  const result = await .find();
  return result;
};
const getSingleSemesterRegistrationIntoDB = async (id: string) => {
  const result = await .findById(id);
  return result;
};

const updateSemesterRegistrationIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await .findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const SemesterRegistrationServices = {
 createSemesterRegistrationIntoDB,
 getAllSemesterRegistrationIntoDB,
 getSingleSemesterRegistrationIntoDB,
 updateSemesterRegistrationIntoDB
};
