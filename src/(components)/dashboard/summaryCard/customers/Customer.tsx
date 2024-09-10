"use client"

import React from "react";
import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import LineChart from "./LineGraph/LineGraph";

const Customer = () => {
    const { arrowImg,customerBtn } = svgIcon;
  return (
    <>
       <div className="bg-white py-[19.63px] px-[13.09px] md:py-[21.25px] md:px-4 border-custom border-custom-border-color rounded-[10.5px] ">
        <div className="logo mb-[9.82px] md:mb-3 w-[23.32px] md:w-0">
          <Image src={customerBtn} alt="" />
        </div>
        <div className="title">
          <h1 className="text-cardSub text-[12.27px] md:text-[15px] font-semibold">
            Total Profit
          </h1>
        </div>
        <div className="incomeProfit flex justify-between items-center mb-[9.82px] md:mb-3">
          <div className="income">
            <h1 className="text-cardMainHead text-xl md:text-2xl font-bold">
            1000
            </h1>
          </div>
          <div className="profit">
            <div className="flex items-center gap-[3px] bg-success rounded-[15.75px] py-[0.75px] px-[6px]">
              <div>
                <Image src={arrowImg} alt="arrow" />
              </div>
              <div className=" text-[10.5px] font-bold text-profitClr">
                10%
              </div>
            </div>
          </div>
        </div>
        <div className="graph w-[190.62px]">
          <LineChart />
        </div>
      </div>
    </>
  );
};

export default Customer;
