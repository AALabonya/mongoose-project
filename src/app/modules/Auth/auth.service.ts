import { User } from "../users/user.model";
import { TLoginUser } from "./auth.interface";

const loginUser = async (payload:TLoginUser) => {
    console.log("payload",payload);
    //checking if the user is exist
    const isUserExist= await User.findOne({id:payload?.id})
    console.log(isUserExist);
    

return {};
    // const result = await .create(payload);
   
  };

  
export const AuthServices = {
    loginUser
  };