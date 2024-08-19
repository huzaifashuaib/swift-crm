import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import SaleperWeekGraph from "./salePerWeek/SaleperWeekGraph";
const SaleperWeek = () => {
  const { lightDot, medDot, darkDot, toDarkDot } = svgIcon;
  return (
      <div className="bg-[#FFFFFF] px-4 py-6  border-custom border-custom-border-color rounded-[10.5px] flex flex-col h-full">
        <div className="salesperWeek">
          <h1 className="text-cardMainHead text-base font-semibold">
            Sales per Week
          </h1>
        </div>

        <div className="border-b border-gray-200 my-3"></div>

        <div className="mb-3 flex justify-center items-center flex-grow">
          {/* <Image src={saleWeekGraph} alt="" /> */}
          <SaleperWeekGraph />
        </div>
        <div className="border-b border-gray-200 my-3"></div>

        <div className="flex">
          <div className="mb-[6px] w-[100px]">
            <h1>Orders:</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 w-[88.5px]">
              <div>
                <Image src={lightDot} alt="" />
              </div>
              <div className="text-xs font-semibold text-cardSub">0-500</div>
            </div>

            <div className="flex items-center gap-2  w-[88.5px]">
              <div>
                <Image src={medDot} alt="" />
              </div>
              <div className="text-xs font-semibold text-cardSub">501-1,000</div>
            </div>

            <div className="flex items-center gap-2  w-[88.5px]">
              <div>
                <Image src={darkDot} alt="" />
              </div>
              <div className="text-xs font-semibold text-cardSub">1,001-5,000</div>
            </div>

            <div className="flex items-center gap-2  w-[97.5px]">
              <div>
                <Image src={toDarkDot} alt="" />
              </div>
              <div className="text-xs font-semibold text-cardSub">5,001-10,000</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SaleperWeek;
