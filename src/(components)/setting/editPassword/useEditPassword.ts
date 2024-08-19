import { signOut } from "next-auth/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

const useEditPassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
;

  const handleupdatePassword = async () => {
    try {
      setLoading(true);
      if (password != "" && newPassword != "") {
        await axios.post("/api/updateProfile/updatePassword", {
          password,
          newPassword,
        });
        setLoading(false);
        toast.success("Password succesfully Changed ✔");
        setTimeout(() => {
          signOut();
        }, 500);
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
