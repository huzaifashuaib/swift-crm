"use client"
import Image from "next/image";
import React from "react";
import { svgIcon } from "@/constants/svgIcon";
import dynamic from 'next/dynamic';
import useOverAllSale from "./useOverAllSale";

const LineGraph = dynamic(() => import("./lineGraph/LineGraph"), {
  ssr: false,
});

const OverAllSales = () => {
  const { purpleCircle, blueCircle, arrowImg} = svgIcon;
  const {totalExpense}=useOverAllSale()
  return (
    <div className="bg-white px-4 pt-6 pb-[51px] border-custom border-custom-border-color rounded-[10.5px] h-full flex flex-col">
      <div className="cityOrderStat">
        <h1 className="text-cardMainHead text-[13.28px] md:text-base mb-[9.96px] md:mb-0 font-semibold">
          Overall Sales
        </h1>
        <div className="md:flex items-center justify-between">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <div className="sales text-[19.92px] md:text-2xl font-bold">$ {totalExpense}.00</div>
            <div className="profit">
              <div className="flex items-center justify-center gap-[1px] bg-success rounded-[15.75px] py-[0.75px] px-[4px]">
                <div>
                  <Image src={arrowImg} alt="arrow-img" />
                </div>
                <div className=" text-[10.5px] font-bold text-profitClr">
                  5.6%
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-[8.72px] md:w-[10.5px]">
                  <Image src={purpleCircle} alt="purple" />
                </div>
                <h3 className="text-xs font-semibold">Current Week</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[8.72px] md:w-[10.5px]">
                  <Image src={blueCircle} alt="blue" />
                </div>
                <h3 className="text-xs font-semibold">Last Week</h3>
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
