import { signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const useSigninForm = () => {
  useEffect(() => {
    signOut({ redirect: false });
  }, []);

  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const login = await signIn("credentials", {
      email,
      password,
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
    email,
    setEamil,
    password,
    setPassword,
    loading,
    setLoading,
    googleLoading,
    setGoogleLoading,
    FaGoogle,
    FaSpinner,
    handleGoogleSubmit,
    handleSubmit
  }
};

export default useSigninForm;
