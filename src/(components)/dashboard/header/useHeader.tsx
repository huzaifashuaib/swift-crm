// import { authOptions } from "@/app/libs/authOptions";
// import { svgIcon } from "@/constants/svgIcon";
// import { getServerSession } from "next-auth";

// const useHeader=async()=>{
//     let userName = '';
//     let userImage = '';
//     const { customerImg } = svgIcon;
  
//     try {
//       const session = await getServerSession(authOptions);
//       userName = session?.user?.name || 'Guest';
//       userImage = session?.user?.image || customerImg;
//     } catch (error) {
//       console.error("Error fetching session:", error);
//       userName = 'Guest'; 
//     }
//     return {userImage,userName}
// }

// export default useHeader;
"use client"

import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { svgIcon } from "@/constants/svgIcon";

const useHeader = () => {
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();
        setUserName(session?.user?.name || 'Guest');
        setUserImage(session?.user?.image || svgIcon.customerImg);
      } catch (error) {
        console.error("Error fetching session:", error);
        setUserName('Guest');
      }
    };

    fetchSession();
  }, []);

  return { userImage, userName };
};

export default useHeader;
