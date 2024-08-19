import { svgIcon } from "@/constants/svgIcon";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const useProfileShow = () => {
  const { customerImg } = svgIcon;
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleEditProfile = () => {
    router.push("/setting/editUserProfile");
  };

  if (status === "loading") {
    return { customerImg, handleEditProfile };
  }

  if (!session) {
    return { customerImg, handleEditProfile };
  }

  const { user } = session;
  const userName = user?.name || "Guest";
  const userImage = user?.image || customerImg;
  const userEmail = user?.email || "";

  return {
    userImage,
    userName,
    userEmail,
    handleEditProfile,
  };
};

export {useProfileShow}
