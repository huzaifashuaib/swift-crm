import axios from "axios";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { CldUploadButton } from "next-cloudinary";
import { FaPlus } from "react-icons/fa";
import { CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useSession } from "next-auth/react";


const useEditForm = () => {

  const { data: session, status } = useSession();



  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [publicId, setPublicId] = useState("");


  useEffect(() => {
    if (session) {
      const { user } = session;
      setUserName(user?.name || "");
      setEmail(user?.email || "");
    }
  }, [session]);

  const handleUpload = (result: CloudinaryUploadWidgetResults) => {
    console.log("Upload result:", result);
    const info = result?.info;
    if (
      typeof info === "object" &&
      info &&
      "secure_url" in info &&
      "public_id" in info
    ) {
      const url = info.secure_url as string;
      const public_id = info.public_id as string;

      setImgUrl(url);
      setPublicId(public_id);
    } else {
      console.error("Failed to retrieve the URL or public ID from Cloudinary.");
    }
  };

  const handleupdatePassword = async () => {
    try {
      setLoading(true);
      if (email != "" && userName != "") {
        await axios.post("/api/updateProfile", {
          userName,
          email,
          imgUrl,
          publicId,
        });
        setLoading(false);
        toast.success("Profile Edit succesfully ✔");
        setTimeout(() => {
          window.location.assign("/setting/myProfile");
        }, 500);
      } else {
        toast.error("Please All Inputs");
      }
    } catch (error: any) {
      console.log(error);
      if (error?.response?.status == 403) {
        toast.error("Please Check Again");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    userName,
    setUserName,
    email,
    setEmail,
    loading,
    setLoading,
    FaSpinner,
    handleupdatePassword,
    imgUrl,
    publicId,
    handleUpload,
    CldUploadButton,
    FaPlus,
  };
};

export default useEditForm;
