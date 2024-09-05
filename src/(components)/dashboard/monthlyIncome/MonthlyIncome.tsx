"use client"
import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";
import BarChart from "./BarChart/BarChart";
import useMonthlyIncome from "./useMonthlyIncome";

const MonthlyIncome = () => {
  const { buttonImg, arrowImg } = svgIcon;
  const {monthlyIncome}=useMonthlyIncome()

  return (
    <div className="bg-[#FFFFFF] py-6 px-4 rounded-[10.5px] border-custom border-custom-border-color h-full">
      <div className="flex gap-3">
        <div className="monthlyIconStatus w-[45%]">
          <div className="monthlyTittle">
            <h1 className="text-cardMainHead text-base font-semibold mb-4">
              Monthly Income
            </h1>
          </div>

          <div className="income flex justify-between items-center mb-[17px]">
            <div className="currentIncome">
              <h1 className="text-cardMainHead text-2xl font-bold">
                $ {monthlyIncome}.00
              </h1>
            </div>
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
          <p className="text-textMain text-sm font-medium-">
            Compared to the previous month
          </p>
          <div className="border-b border-gray-200 my-[17px]"></div>
          <div className="accountBox flex items-center gap-3">
            <div className="icon">
              <Image src={buttonImg} alt="" />
            </div>
            <div className="accountInfo">
              <h1 className="text-[15px] text-cardMainHead font-semibold">
                Accounting
              </h1>
              <p className="text-[15px] text-textMain font-medium">
                July 1, 2023 - July 31, 2023
              </p>
            </div>
          </div>
        </div>
        <div className="monthlyGraph w-[55%]">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default MonthlyIncome;
