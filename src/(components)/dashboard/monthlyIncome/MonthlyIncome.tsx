import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";
import Graph from "../../../../public/assets/dashboard-svg/Graph.png"

const MonthlyIncome = () => {
  const { buttonImg, arrowImg } = svgIcon;

  return (
    <div className="flex">
      <div className="monthlyIconStatus w-1/2">
        <div className="monthlyTittle">
          <h1 className="text-cardMainHead text-base font-semibold mb-4">
            Monthly Income
          </h1>
        </div>

        <div className="income flex justify-between mb-[17px]">
          <div className="currentIncome">
            <h1 className="text-cardMainHead text-2xl font-bold">$ 6,567.00</h1>
          </div>
          <div className="profit">
            <div className="flex items-center gap-[3px] bg-upArrow rounded-[15.75px] py-[0.75px] px-[6px]">
              <div>
                <Image src={arrowImg} alt="" />
              </div>
              <div>5.6%</div>
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
            <p className="text-[15px] text-textMain font-semibold">
              July 1, 2023 - July 31, 2023
            </p>
          </div>
        </div>
      </div>
      <div className="monthlyGraph w-1/2">
        <Image src={Graph} alt=""/>
      </div>
    </div>
  );
};

export default MonthlyIncome;
