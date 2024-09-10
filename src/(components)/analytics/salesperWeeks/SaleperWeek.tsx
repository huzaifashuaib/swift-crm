"use client"
import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import SaleperWeekGraph from "./salePerWeek/SaleperWeekGraph";
const SaleperWeek = () => {
  const { lightDot, medDot, darkDot, toDarkDot } = svgIcon;
  return (
      <div className="bg-white px-4 py-6  border-custom border-custom-border-color rounded-[10.5px] flex flex-col h-full">
        <div className="salesperWeek">
          <h1 className="text-cardMainHead text-[13.28px] md:text-base font-semibold">
            Sales per Week
          </h1>
        </div>

        <div className="border-b border-gray-200 my-[9.96px] md:my-3"></div>

        <div className="mb-3 flex justify-center items-center flex-grow">
          <SaleperWeekGraph />
        </div>
        <div className="border-b border-gray-200 my-[9.96px] md:my-3"></div>

        <div className="md:flex">
          <div className="mb-[6px] w-[100px]">
            <h1 className=" text-xs md:text-base font-semibold">Orders:</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-[6.64px] md:gap-2 w-[43.35px] md:w-[88.5px]">
              <div>
                <Image src={lightDot} alt="light" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-cardSub">0-500</div>
            </div>

            <div className="flex items-center gap-[6.64px] md:gap-2 w-[57.35px] md:w-[88.5px]">
              <div>
                <Image src={medDot} alt="med" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-cardSub">501-1,000</div>
            </div>

            <div className="flex items-center gap-[6.64px] md:gap-2 w-[67.36px] md:w-[88.5px]">
              <div>
                <Image src={darkDot} alt="dark" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-cardSub">1,001-5,000</div>
            </div>

            <div className="flex items-center gap-[6.64px] md:gap-2 w-[72.36px] md:w-[97.5px]">
              <div>
                <Image src={toDarkDot} alt="full" />
              </div>
              <div className="text-[10px] md:text-xs font-semibold text-cardSub">5,001-10,000</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SaleperWeek;
