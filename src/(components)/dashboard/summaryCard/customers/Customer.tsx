"use client"

import React from "react";
import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import LineChart from "./LineGraph/LineGraph";

const Customer = () => {
    const { arrowImg,customerBtn } = svgIcon;
  return (
    <>
      <div className="bg-[#FFFFFF] py-[21.25px] px-4 border-custom border-custom-border-color rounded-[10.5px]">
        <div className="logo mb-3">
          <Image src={customerBtn} alt="" />
        </div>
        <div className="title">
          <h1 className="text-cardSub text-[15px] font-semibold">
            New Customers
          </h1>
        </div>
        <div className="incomeProfit flex justify-between items-center mb-3">
          <div className="income">
            <h1 className="text-cardMainHead text-2xl font-bold">
              1000
            </h1>
          </div>
          <div className="profit">
            <div className="flex items-center gap-[3px] bg-[#DBEEFF] rounded-[15.75px] py-[0.75px] px-[6px]">
              <div>
                <Image src={arrowImg} alt="" />
              </div>
              <div className=" text-[10.5px] font-bold text-[#41A5FF]">
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
