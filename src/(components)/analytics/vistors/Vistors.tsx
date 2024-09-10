import Image from "next/image";
import React from "react";
import { svgIcon } from "@/constants/svgIcon";
import BarGraph from "./BarGraph/BarGraph";

const Vistors = () => {
  const { reviewIcon } = svgIcon;
  return (
    <div className="bg-white px-4 py-6  border-custom border-custom-border-color rounded-[10.5px] h-full  flex flex-col">

      <div className="visitors">
        <h1 className="text-cardMainHead text-[13.28px] md:text-base font-semibold">Orders</h1>
      </div>

      <div className="border-b border-gray-200 my-3"></div>

      <div className="flex-grow">
        <BarGraph />
      </div>

      <div className="border-b border-gray-200  my-[9.96px] md:my-3"></div>

      <div className="flex items-center gap-2">

        <div className="px-[3.5px]">
          <Image src={reviewIcon} alt="icon" />
        </div>

        <div>
          <h1 className="mb-1 text-xs md:text-base">Awesome!</h1>
          <p className="text-[10px] md:text-xs text-textMain">You just hit a new record!</p>
        </div>

      </div>

    </div>
  );
};

export default Vistors;
