import { signOut } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useAppDispatch } from "@/redux/store";
import { updatePassword } from "@/redux/slices/userSlice";
import { UpdatePasswordDataType } from "@/types/types";

const useEditPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleupdatePassword = async (formData:UpdatePasswordDataType) => {
    try {
      setLoading(true);
      const { password, newPassword } = formData;
      if (password && newPassword) {
        const resultAction = await dispatch(updatePassword({ password, newPassword }));
        setLoading(false);
        if (updatePassword.rejected.match(resultAction)) {
          const errorMessage = resultAction.payload as string;
          toast.error(errorMessage);
        } else {
          toast.success("Password successfully changed ✔");
          setTimeout(() => {
            signOut();
          }, 500);
        }
      } else {
        toast.error("Please fill in all fields");
      }
    } catch (error: any) {
      console.log(error);
      if (error?.response?.status === 403) {
        toast.error("Old password incorrect");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleInputChange,
    loading,
    FaSpinner,
    handleupdatePassword,
  };
};

export default useEditPassword;
