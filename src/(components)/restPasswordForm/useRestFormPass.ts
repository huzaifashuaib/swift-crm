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

  const handleRestPass = async () => {
    if (
      newPassword == enterPassword &&
      enterPassword != "" &&
      newPassword != ""
    ) {
      try {
        setloading(true);
        await axios.post("/api/updatepassword", {
          newPassword,
          token,
        });
        setloading(false);
        toast.success("Successfully Updated Password 🔐");
        router.push("http://localhost:3000/signin");
      } catch (error: any) {
        console.log(error);
        toast.error(error?.response?.data);
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
