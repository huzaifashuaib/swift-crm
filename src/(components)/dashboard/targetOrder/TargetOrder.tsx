"use client";

import { useState } from "react";
import CustomCircularProgressBar from "./CustomCircularBar";

const TargetOrder: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(68);

  return (
    <div className=" bg-gradient-to-t from-cardTopColor to-cardBottomColor h-full py-6 px-3 flex flex-col justify-center items-center rounded-[10.5px]">
      <CustomCircularProgressBar
        percentage={percentage}
        size={101.7}
        strokeWidth={19}
        color="#FFFFFF"
        trackColor="#DDC6FF"
      />
      <div className="percentageInfo flex flex-col gap-1 mt-4">
        <h1 className="text-lg font-bold text-white">
          {percentage * 30}/3,000
        </h1>
        <p className="text-sm text-white font-semibold mt-2">Target Orders</p>
      </div>
      {/* <button
          onClick={() => setPercentage((prev) => (prev + 10) % 101)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          
        </button> */}
    </div>
  );
};

export default TargetOrder;
