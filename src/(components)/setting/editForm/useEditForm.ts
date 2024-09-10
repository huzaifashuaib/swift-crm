import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { CldUploadButton } from "next-cloudinary";
import { FaPlus } from "react-icons/fa";
import { CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useSession, signOut } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { updateProfile } from "@/redux/slices/userSlice";
import { UpdateProfileDataType } from "@/types/types";

const useEditForm = () => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    imgUrl: "",
    publicId: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.user.user);

  useEffect(() => {
    if (session) {
      const { user } = session;
      setFormData((prev) => ({
        ...prev,
        userName: user?.name || "",
        email: user?.email || "",
      }));
    }
  }, [session]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpload = (result: CloudinaryUploadWidgetResults) => {
    const info = result?.info;
    if (typeof info === "object" && info && "secure_url" in info && "public_id" in info) {
      const url = info.secure_url as string;
      const public_id = info.public_id as string;

      setFormData((prev) => ({
        ...prev,
        imgUrl: url,
        publicId: public_id,
      }));
    } else {
      toast.error("Failed to retrieve the URL or public ID from Cloudinary.");
    }
  };

  const handleupdateProfile = async (formData:UpdateProfileDataType) => {
    try {
      setLoading(true);
      if (formData.email !== "" && formData.userName !== "") {
        const resultAction = await dispatch(
          updateProfile(formData)
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
    formData,
    setFormData,
    loading,
    FaSpinner,
    handleupdateProfile,
    handleUpload,
    CldUploadButton,
    FaPlus,
    handleInputChange
  };
};

export default useEditForm;
