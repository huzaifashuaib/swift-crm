"use client";

import { useState } from "react";
import CustomCircularProgressBar from "./CustomCircularBar";

const TargetOrder: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(68);

  return (
    <div className="bg-gradient-to-t from-cardTopColor to-cardBottomColor  h-full py-6 px-3 gap-[6.54px] flex flex-row md:flex-col md:justify-center justify-evenly items-center rounded-[10.5px]">
      <CustomCircularProgressBar
        percentage={percentage}
        size={130}
        strokeWidth={19}
        color="white"
        trackColor="#DDC6FF"
      />
      <div className="percentageInfo flex flex-col gap-1 mt-4">
        <h1 className="text-xl md:text-xl font-bold text-white">
          {percentage * 30}/<span className="text-base">3,000</span>
        </h1>
        <p className=" text-xs md:text-sm text-white font-semibold md:mt-2">
          Target Orders
        </p>
      </div>
    </div>
  );
};

export default TargetOrder;
