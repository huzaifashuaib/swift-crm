// import { CiSearch } from "react-icons/ci";
// import Image from "next/image";
// import useHeader from "./useHeader";

// const Header = async () => {
//   const { userImage, userName } = await useHeader();

//   return (
//     <div className="flex justify-between items-center">
//       <div className="profile flex items-center gap-4 md:gap-5">
//         <div className="relative w-[61px] h-[61px] sm:w-[80px] sm:h-[80px] md:w-[89px] md:h-[89px]">
//           <Image
//             src={userImage}
//             alt="user"
//             layout="fill" // Ensure the image covers the container
//             className="rounded-full object-cover"
//             priority={false}
//           />
//         </div>
//         <div className="profile-info">
//           <h1 className="text-base font-bold mb-1">
//             <span>Welcome Back, </span>
//             <span className="text-btnColor">{userName}</span>
//           </h1>
//           <p className="text-xs text-textMain font-semibold">
//             Here are your monthly store updates.
//           </p>
//         </div>
//       </div>

//       <div className="searchBox hidden md:block">
//         <div className="input-search flex rounded-sm border border-gray-200">
//           <input
//             type="text"
//             className="py-1 px-3 border-none"
//             placeholder="Type Here"
//           />
//           <button className="flex items-center gap-2 bg-btnColor rounded-r-md py-1 px-3 text-white">
//             <CiSearch />
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
"use client"

import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import useHeader from "./useHeader";

const Header = () => {
  const { userImage, userName } = useHeader();

  return (
    <div className="flex justify-between items-center">
      <div className="profile flex items-center gap-4 md:gap-5">
        <div className="relative w-[61px] h-[61px] sm:w-[80px] sm:h-[80px] md:w-[89px] md:h-[89px]">
          <Image
            src={userImage}
            alt="user"
            layout="fill" 
            className="rounded-full object-cover"
            priority={false}
          />
        </div>
        <div className="profile-info">
          <h1 className="text-base font-bold mb-1">
            <span>Welcome Back, </span>
            <span className="text-btnColor">{userName}</span>
          </h1>
          <p className="text-xs text-textMain font-semibold">
            Here are your monthly store updates.
          </p>
        </div>
      </div>

      <div className="searchBox hidden md:block">
        <div className="input-search flex rounded-sm border border-gray-200">
          <input
            type="text"
            className="py-1 px-3 border-none"
            placeholder="Type Here"
          />
          <button className="flex items-center gap-2 bg-btnColor rounded-r-md py-1 px-3 text-white">
            <CiSearch />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

