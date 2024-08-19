import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";

const SaleHistory = () => {
  const { customerSalePic } = svgIcon;
  return (
    <div className="bg-[#FFFFFF] px-4 pt-6 pb-4 border-custom border-custom-border-color rounded-[10.5px] h-full">
      <div className="salesHistory">
        <h1 className="text-cardMainHead text-base font-semibold">
          Sales History
        </h1>
      </div>

      <div className="border-b border-gray-200 my-3"></div>
      <div>
        <h1 className="text-xs mb-3">RECENT</h1>
      </div>

      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div>
            <Image src={customerSalePic} alt="" />
          </div>
          <div>
            <h1 className="text-sm font-medium text-cardMainHead mb-1">
              Jacob Swanson
            </h1>
            <p className="text-xs font-medium text-textMain">United States</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-textMain">$999.00</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div>
            <Image src={customerSalePic} alt="" />
          </div>
          <div>
            <h1 className="text-sm font-medium text-cardMainHead mb-1">
              Jacob Swanson
            </h1>
            <p className="text-xs font-medium text-textMain">United States</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-textMain">$999.00</p>
        </div>
      </div>


      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div>
            <Image src={customerSalePic} alt="" />
          </div>
          <div>
            <h1 className="text-sm font-medium text-cardMainHead mb-1">
              Jacob Swanson
            </h1>
            <p className="text-xs font-medium text-textMain">United States</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-textMain">$999.00</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div>
            <Image src={customerSalePic} alt="" />
          </div>
          <div>
            <h1 className="text-sm font-medium text-cardMainHead mb-1">
              Jacob Swanson
            </h1>
            <p className="text-xs font-medium text-textMain">United States</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-textMain">$999.00</p>
        </div>
      </div>
    </div>
  );
};

export default SaleHistory;
