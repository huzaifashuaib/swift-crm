import { signOut } from "next-auth/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useAppDispatch } from "@/redux/store";
import { updatePassword } from "@/redux/slices/userSlice";

const useEditPassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
 
  const dispatch=useAppDispatch()

  const handleupdatePassword = async () => {
    try {
      setLoading(true);
      if (password != "" && newPassword != "") {
        const resultAction=await dispatch(updatePassword({password,newPassword}));
         setLoading(false);
         if(updatePassword.rejected.match(resultAction)){
          const errorMessage = resultAction.payload as string;
          toast.error(errorMessage);
        }
        else{
          toast.success("Password succesfully Changed ✔");
          setTimeout(() => {
            signOut();
          }, 500);
        }
      } else {
        toast.error("Please All Inputs");
      }
    } catch (error: any) {
      console.log(error);
      if (error?.response?.status == 403) {
        toast.error("Old Password Incorrect");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    password,
    setPassword,
    newPassword,
    setNewPassword,
    loading,
    FaSpinner,
    handleupdatePassword,
  };
};

export default useEditPassword;
