"use client";

import React from "react";
import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import LineChart from "./LineGraph/LineGraph";
import useExpense from "./useExpense";


const Expense = () => {
  const { downArrow, expenseBtn } = svgIcon;
  const { totalExpense } = useExpense();
  return (
    <>
      <div className="bg-[#FFFFFF] py-[21.25px] px-4 border-custom border-custom-border-color rounded-[10.5px]">
        <div className="logo mb-3">
          <Image src={expenseBtn} alt="" />
        </div>
        <div className="title">
          <h1 className="text-cardSub text-[15px] font-semibold">
            Total Expense
          </h1>
        </div>
        <div className="incomeProfit flex justify-between items-center mb-3">
          <div className="income">
            <h1 className="text-cardMainHead text-2xl font-bold">
              $ {totalExpense}
            </h1>
          </div>
          <div className="expense">
            <div className="flex items-center gap-[3px] bg-dangerBg rounded-[15.75px] py-[0.75px] px-[6px]">
              <div>
                <Image src={downArrow} alt="" />
              </div>
              <div className=" text-[10.5px] font-bold text-danger">2.6%</div>
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

export default Expense;
