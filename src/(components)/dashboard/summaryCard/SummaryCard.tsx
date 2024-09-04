"use client"
import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import LineChart from "./LineGraph/LineGraph";
import useSummaryCard from "./useSummaryCard";

const SummaryCard = ({color}:{color:string}) => {
  const { arrowImg, profitBtn, graphProfit } = svgIcon;
  const {totalProfit}=useSummaryCard()
  return (
    <div className="bg-[#FFFFFF] py-[21.25px] px-4 border-custom border-custom-border-color rounded-[10.5px]">
      <div className="logo mb-3">
        <Image src={profitBtn} alt="" />
      </div>
      <div className="title">
        <h1 className="text-cardSub text-[15px] font-semibold">Total Profit</h1>
      </div>
      <div className="incomeProfit flex justify-between items-center mb-3">
        <div className="income">
          <h1 className="text-cardMainHead text-2xl font-bold">$ {totalProfit}</h1>
        </div>
        <div className="profit">
          <div className="flex items-center gap-[3px] bg-success rounded-[15.75px] py-[0.75px] px-[6px]">
            <div>
              <Image src={arrowImg} alt="" />
            </div>
            <div className=" text-[10.5px] font-bold text-[#62912C]">3.4%</div>
          </div>
        </div>
      </div>
      <div className="graph">
        <LineChart color={color} />
      </div>
    </div>
  );
};

export default SummaryCard;
