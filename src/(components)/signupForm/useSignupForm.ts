import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/store";
import { addUser } from "@/redux/slices/authSlice";
import { UserSignupDataType } from "@/types/types";

const useSignupForm = () => {
  useEffect(() => {
    signOut({ redirect: false });
  }, []);

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmitRegister = async (userData:UserSignupDataType) => {
    try {
      setLoading(true);
      const resultAction = await dispatch(addUser(userData)).unwrap();
      if (addUser.rejected.match(resultAction)) {
        const errorMessage = resultAction.payload as string;
        toast.error(errorMessage || "Registration failed");
      } else {
        toast.success("Successfully Added");
        router.push("/signin");
      }
    } catch (error: any) {
      toast.error(error.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmitRegister,
    loading,
    FaSpinner,
  };
};

export default useSignupForm;
