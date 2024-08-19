import Image from "next/image";
import NavLink from "./NavLink";
import { svgIcon } from "@/constants/svgIcon";

const Nav = () => {
  const { logo } =svgIcon ;

  return (
    <div className="bg-[#FFFFFF] rounded-lg w-[220px] shadow-custom py-8">

      <div className="logo mb-8 ml-4">
        <Image src={logo} alt="" />
      </div>

      <div className="navlinks flex flex-col gap-4 mx-4">
        <p className=" text-textMain font-bold text-xs my-2">GENERAL</p>
        <NavLink />
      </div>

    </div>
  );
};

export default Nav;
