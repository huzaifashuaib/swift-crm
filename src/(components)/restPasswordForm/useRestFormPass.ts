import { updatePassword } from "@/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const useRestFormPass = (token: string) => {
  const [newPassword, setnewPassword] = useState("");
  const [enterPassword, setReEnterPassword] = useState("");
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const dispatch=useAppDispatch()
  const error=useAppSelector((state)=>state.auth.error)


  const handleRestPass = async () => {
    if (
      newPassword == enterPassword &&
      enterPassword != "" &&
      newPassword != ""
    ) {
      try {
        setloading(true);
        const resultAction=await dispatch(updatePassword({newPassword,token})).unwrap();
        setloading(false);
        if(updatePassword.rejected.match(resultAction)){
          const errorMessage = resultAction.payload as string;
          toast.error(errorMessage);
        }
        else{
          toast.success("Successfully Updated Password 🔐");
          router.push("http://localhost:3000/signin");
        }
      } catch (error: any) {
      toast.error(error?.response?.status);
      } finally {
        setloading(false);
      }
    } else if (newPassword == "" || enterPassword == "") {
      toast.error("Please Fill Password Feild");
    } else {
      toast.error("Password Not Match");
    }
  };

  return {
    newPassword,
    enterPassword,
    FaSpinner,
    setReEnterPassword,
    setnewPassword,
    loading,
    handleRestPass
  };
};

export default useRestFormPass;
