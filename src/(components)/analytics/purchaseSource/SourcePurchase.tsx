import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import DoughnutGraph from "./DoughnutGraph/DoughnutGraph";

const SourcePurchase = () => {
  const { blueDot, orangeDot, greenDot } = svgIcon;

  return (
  
      <div className="bg-[#FFFFFF] px-4 pt-6  border-custom border-custom-border-color rounded-[10.5px] h-full flex flex-col">
        <div className="sourcerParchase">
          <h1 className="text-cardMainHead text-base font-semibold">
            Source of Purchases
          </h1>
        </div>

        <div className="border-b border-gray-200 my-3"></div>

        <div className="mb-3 flex justify-center items-center flex-grow">
          <DoughnutGraph />
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div>
                <Image src={blueDot} alt="" />
              </div>
              <h2>Social Media</h2>
            </div>
            <div>
              <h2>49%</h2>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div>
                <Image src={greenDot} alt="" />
              </div>
              <h2>Direct Search</h2>
            </div>
            <div>
              <h2>54%</h2>
            </div>
          </div>
        </div>

        <div className="mb-[11.23px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div>
                <Image src={orangeDot} alt="" />
              </div>
              <h2>Others</h2>
            </div>
            <div>
              <h2>16%</h2>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SourcePurchase;
