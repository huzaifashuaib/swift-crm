import Image from "next/image";
import NavLink from "./NavLink";
import { svgIcon } from "@/constants/svgIcon";
import MobileNav from "./MobileNav";

const Nav = () => {
  const { logo } =svgIcon ;

  return (
    <>  
    <div className=" hidden xl:block bg-white rounded-lg w-[220px] shadow-custom py-8">

      <div className="logo mb-8 ml-4">
        <Image src={logo} alt="logo" />
      </div>

      <div className="navlinks flex flex-col gap-4 mx-4">
        <p className=" text-textMain font-bold text-xs my-2">GENERAL</p>
        <NavLink />
      </div>

    </div>
    <div className="block xl:hidden">
      <MobileNav />
    </div>
    </>

  );
};

export default Nav;
