import { CiSearch } from "react-icons/ci";
import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";

const Header = () => {
    const {profileImg}=svgIcon;
  return (
    <div className="flex justify-between items-center">
      <div className="profile flex items-center gap-[22px]">
        <div className="image">
        <Image src={profileImg} alt=""/>
        </div>
        <div className="profile-info">
          <h1>
            <span>Welcome Back, </span>
            <span>Sophia Chester</span>
          </h1>
          <p>Here are your monthly store updates.</p>
        </div>
      </div>

      <div className="searchBox ">
        <div className="input-search flex rounded-sm focus:border focus:border-none ">
          <input
            type="text"
            className="py-[6px] px-3 border border-gray-200"
            placeholder="Type Here"
          />
          <button className="flex items-center gap-2 bg-btnColor rounded-r-[4px] py-[6px] px-3 text-white br-">
            <CiSearch />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
