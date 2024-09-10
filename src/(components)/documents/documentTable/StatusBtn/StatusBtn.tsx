import React from "react";

const StatusBtn = ({text}:{text:string}) => {
  return (
    <div className=" bg-success rounded-[13.07px] py-[0.62px] px-[4.98px]">
      <div className="text-[10px] leading-[15px] font-bold text-profitClr">
        {text}
      </div>
    </div>
  );
};

export default StatusBtn;
