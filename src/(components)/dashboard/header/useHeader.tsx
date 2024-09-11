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
