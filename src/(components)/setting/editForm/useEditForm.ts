import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { CldUploadButton } from "next-cloudinary";
import { FaPlus } from "react-icons/fa";
import { CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useSession, signOut } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { updateProfile } from "@/redux/slices/userSlice";

const useEditForm = () => {
  const { data: session } = useSession();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [publicId, setPublicId] = useState("");
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (session) {
      const { user } = session;
      setUserName(user?.name || "");
      setEmail(user?.email || "");
    }
  }, [session]);

  const handleUpload = (result: CloudinaryUploadWidgetResults) => {
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
      toast.error("Failed to retrieve the URL or public ID from Cloudinary.");
    }
  };

  const handleupdatePassword = async () => {
    try {
      setLoading(true);
      if (email !== "" && userName !== "") {
        const resultAction = await dispatch(
          updateProfile({ userName, email, imgUrl, publicId })
        );
        if (updateProfile.rejected.match(resultAction)) {
          const errorMessage = resultAction.payload as string;
          toast.error(errorMessage);
        } else {
          const { shouldSignOut } = resultAction.payload;
          toast.success("Profile updated successfully ✔");
          if (shouldSignOut) {
            toast.success("Email changed. Signing out");
            setTimeout(() => {
              signOut({ callbackUrl: "/signin" });
            }, 1000);
          } else {
            setTimeout(() => {
              window.location.assign("/setting/myProfile");
            }, 500);
          }
        }
      } else {
        toast.error("Please fill in all inputs");
      }
    } catch (error: any) {
      console.log(error);
      if (error?.response?.status === 403) {
        toast.error("Unauthorized access. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
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
