"use client"
import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import NavLink from "./NavLink";
import { MdOutlineCancel } from "react-icons/md";

const MobileNav = () => {
  const { logo } = svgIcon;
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <div className="flex justify-between items-center my-2">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <button
            className="bg-btnColor px-[17px] py-[12px] text-white rounded-sm"
            onClick={handleToggle}
          >
            {toggle ? (
              <MdOutlineCancel className="w-[22px]" />
            ) : (
              <FaBars className="w-[22px]" />
            )}
          </button>
        </div>
      </div>

      <div>
        {toggle ? (
          <div className="h-screen block bg-white">
            <NavLink />
          </div>
        ) : (
          <div className="h-screen hidden bg-white">
            <NavLink />
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
