"use client";
import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";
import BarChart from "./BarChart/BarChart";
import useMonthlyIncome from "./useMonthlyIncome";

const MonthlyIncome = () => {
  const { buttonImg, arrowImg } = svgIcon;
  const { monthlyIncome } = useMonthlyIncome();

  return (
    <div className="bg-[#FFFFFF] py-5 px-[14px] md:py-6 md:px-4 rounded-[10.5px] border-custom border-custom-border-color h-full">
      <div className="md:flex gap-3">
        <div className="monthlyIconStatus w-full md:w-[45%]">
          <div className="monthlyTittle">
            <h1 className="text-cardMainHead text-sm md:text-base font-semibold mb-[13.91px] md:mb-4">
              Monthly Income
            </h1>
          </div>

          <div className="income flex gap-[12.27px] md:justify-between items-center mb-[13.91px] md:mb-[17px]">
            <div className="currentIncome">
              <h1 className="text-cardMainHead text-xl md:text-2xl font-bold">
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
          <p className="text-textMain text-sm font-medium mb-[13.91px] md:mb-0">
            Compared to the previous month
          </p>
          <div className="md:block hidden">
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
        </div>
        <div className="monthlyGraph w-full md:w-[55%]">
          <BarChart />
        </div>



        <div className="block md:hidden">
            <div className="border-b border-gray-200 my-[13.91px] md:my-[17px]"></div>
            <div className="accountBox flex items-center gap-[9.82px] md:gap-3">
              <div className="icon w-[23.32px]">
                <Image src={buttonImg} alt="" />
              </div>
              <div className="accountInfo">
                <h1 className="text-sm md:text-[15px] text-cardMainHead font-semibold">
                  Accounting
                </h1>
                <p className="text-[12.27px] md:text-[15px] text-textMain font-medium">
                  July 1, 2023 - July 31, 2023
                </p>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default MonthlyIncome;
