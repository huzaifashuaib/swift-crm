import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map/Map"), {
  ssr: false,
});

export default function CityOrderStatistics() {
  return (
    <div className="bg-[#FFFFFF] pt-6 px-4 py-6 border-custom border-custom-border-color rounded-[10.5px]">
      <div className="cityOrderStat">
        <h1 className="text-cardMainHead text-base font-semibold">
          City Order Statistics
        </h1>
      </div>
      <div className="border-b border-gray-200 my-3"></div>
      <div className="relative h-[402.5px] w-full" >
        <Map />
      </div>
    </div>
  );
}
