import { authOptions } from "@/app/libs/authOptions";
import { svgIcon } from "@/constants/svgIcon";
import { getServerSession } from "next-auth";

const useHeader=async()=>{
    let userName = '';
    let userImage = '';
    const { customerImg } = svgIcon;
  
    try {
      const session = await getServerSession(authOptions);
      userName = session?.user?.name || 'Guest';
      userImage = session?.user?.image || customerImg;
    } catch (error) {
      console.error("Error fetching session:", error);
      userName = 'Guest'; 
    }
    return {userImage,userName}
}

export default useHeader;