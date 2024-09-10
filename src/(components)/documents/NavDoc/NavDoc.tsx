import React from "react";
import { CiSearch } from "react-icons/ci";
import CustomBtn from "../../customBtn/CustomBtn";

const NavDoc = () => {
  return (
    <div className="md:flex justify-between items-center">
      <div className="links flex items-center mb-[26.56px] md:mb-0">
        <h1 className="border-b-4 border-b-btnColor px-2 py-4 text-base font-semibold">
          All
        </h1>
        <h1 className="border-b-4 border-b-cardMainHead  px-2 py-4 text-base font-semibold">
          Active
        </h1>
        <h1 className="border-b-4 border-b-cardMainHead  px-2 py-4 text-base font-semibold">
          Archive
        </h1>
      </div>

      <div className="md:flex items-center gap-4">
        <div className="searchBox">
          <div className="input-search flex rounded-sm focus:border focus:border-none">
            <input
              type="text"
              className="py-[6px] px-3 border border-gray-200 w-[222px] md:w-auto"
              placeholder="Type Here"
            />
            <button className="flex items-center gap-[6.64px] md:gap-2 text-[13.28px] bg-btnColor rounded-r-[4px] px-[9.96px] py-[4.98px] md:py-[6px] md:px-3 text-white">
              <CiSearch />
              Search
            </button>
          </div>
        </div>
        <div className="my-[13.28px] md:my-0">
            <CustomBtn text="Download"/>
        </div>
        <div>
            <CustomBtn text="Delete"/>
        </div>
      </div>
    </div>
  );
};

export default NavDoc;
