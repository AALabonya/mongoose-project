import { TLoginUser } from "./auth.interface";

const loginUser = async (payload:TLoginUser) => {
console.log(payload);

    // const result = await .create(payload);
    // return result;
  };

  
export const AuthServices = {
    loginUser
  };