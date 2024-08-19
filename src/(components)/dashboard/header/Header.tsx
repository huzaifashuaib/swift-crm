import { CiSearch } from "react-icons/ci";;
import Image from "next/image";
import useHeader from "./useHeader";
const Header = async() => {
  const {userImage,userName}=await useHeader()

  return (
    <div className="flex justify-between items-center">
      <div className="profile flex items-center gap-[22px]">
      <div className="rounded-full overflow-hidden w-[89px] h-[89px]">
            <Image
              src={userImage}
              alt=""
              width={89}
              height={89} 
              className="rounded-full object-cover" 
            />
          </div>
        <div className="profile-info">
          <h1>
            <span>Welcome Back, </span>
            <span>{userName}</span>
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
