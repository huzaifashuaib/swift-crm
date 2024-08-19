import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const useForgetForm=()=>{
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const handleforgetPassword=async()=>{
      try {
        setLoading(true)
        await axios.post("/api/forgetpassword", {
          email,
        });
        setLoading(false)
        toast.success("Successfully Send Check your Mail 📭");
      } catch (error: any) {
        console.log(error);
        toast.error(error?.response?.status);
      }
      finally{
        setLoading(false)
      }
    }
    return {email,setEmail,loading,handleforgetPassword,FaSpinner}
}

export default useForgetForm;