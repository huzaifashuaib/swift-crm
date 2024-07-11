"use client";
import { CircularProgressBar } from "react-percentage-bar";

const TargetOrder = () => {
  return (
    <div>
      <div className="bg-gradient-to-t from-cardTopColor to-cardBottomColor py-9 px-5">
        <div className="percentageBar">
          <CircularProgressBar
            antiClockWise={true}
            size={"1.5rem"}
            shadow={true}
            roundLineCap={false}
            color={"#FFFFFF"}
            percentage={68}
            trackColor={"#DDC6FF"}
            percentageStyle={{
              color: "white",
              fontWeight: "700",
              fontSize: "24px",
            }}
          />
        </div>
        <div className="percenatgeInfo flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-white">
            2,040/<span className="text-base">3,000</span>
          </h1>
          <p className="text-base text-white font-semibold">Target Orders</p>
        </div>
      </div>
    </div>
  );
};

export default TargetOrder;
