import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addUser } from "@/redux/slices/authSlice";

const useSignupForm = () => {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmitRegister = async () => {
    try {
      setLoading(true);
      const resultAction = await dispatch(addUser({ name, email, password })).unwrap();
      if (addUser.rejected.match(resultAction)) {
        const errorMessage = resultAction.payload as string;
        toast.error(errorMessage || "Registration failed");
      } else {
        toast.success("Successfully Added");
        router.push("/signin");
      }
    } catch (error: any) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    loading,
    setLoading,
    handleSubmitRegister,
    FaSpinner,
  };
};

export default useSignupForm;
