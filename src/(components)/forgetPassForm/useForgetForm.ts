import { forgetPassword } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/store";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const useForgetForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleforgetPassword = async () => {
    try {
      setLoading(true);
      const resultAction = await dispatch(forgetPassword({ email })).unwrap();
      setLoading(false);
      if (forgetPassword.rejected.match(resultAction)) {
        const errorMessage = resultAction.payload as string;
        toast.error(errorMessage);
      } else {
        toast.success("Successfully Send Check your Mail 📭");
      }
    } catch (error: any) {
      toast.error(error?.response?.status);
    } finally {
      setLoading(false);
    }
  };
  return { email, setEmail, loading, handleforgetPassword, FaSpinner };
};

export default useForgetForm;
