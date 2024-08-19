import Image from "next/image";
import React from "react";
import { svgIcon } from "@/constants/svgIcon";
import LineGraph from "./lineGraph/LineGraph";

const OverAllSales = () => {
  const { purpleCircle, blueCircle, arrowImg} = svgIcon;
  return (
    <div className="bg-[#FFFFFF] px-4 pt-6 pb-[51px] border-custom border-custom-border-color rounded-[10.5px] h-full flex flex-col">
      <div className="cityOrderStat">
        <h1 className="text-cardMainHead text-base font-semibold">
          Overall Sales
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="sales">$ 58,986.00</div>
            <div className="profit">
              <div className="flex items-center justify-center gap-[1px] bg-success rounded-[15.75px] py-[0.75px] px-[4px]">
                <div>
                  <Image src={arrowImg} alt="" />
                </div>
                <div className=" text-[10.5px] font-bold text-[#62912C]">
                  5.6%
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="salesWeeks flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div>
                  <Image src={purpleCircle} alt="" />
                </div>
                <h3>Current Week</h3>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <Image src={blueCircle} alt="" />
                </div>
                <h3>Last Week</h3>
              </div>
            </div>
          </div>
        </div>

      <div className="border-b border-gray-200 my-3"></div>
      
      <div>
        <div className="mr-[7px] flex-grow">
            <LineGraph />
        </div>
      </div>

      </div>
    </div>
  );
};

export default OverAllSales;
