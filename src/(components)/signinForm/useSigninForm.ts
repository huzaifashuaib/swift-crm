import { signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner, FaGoogle } from "react-icons/fa";

const useSigninForm = () => {
  useEffect(() => {
    signOut({ redirect: false });
  }, []);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const login = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    setLoading(false);
    if (login?.ok) {
      toast.success("Successfully Logged In");
      window.location.assign("/");
    } else if (login?.error) {
      toast.error(login?.error);
    }
  };

  const handleGoogleSubmit = async () => {
    setGoogleLoading(true);
    await signIn("google", { callbackUrl: "/" });
    setGoogleLoading(false);
  };

  return {
    formData,
    setFormData,
    loading,
    googleLoading,
    FaGoogle,
    FaSpinner,
    handleGoogleSubmit,
    handleSubmit,
    handleInputChange
  };
};

export default useSigninForm;
