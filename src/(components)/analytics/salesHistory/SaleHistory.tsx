import Image from "next/image";
import { AnalysticsCustomerData } from "@/constants/analysticCustomerData";

const SaleHistory = () => {
  return (
    <div className="bg-white px-[13.28px] py-[19.92px] md:px-4 md:pt-6 mb:pb-4 border-custom border-custom-border-color rounded-[10.5px] h-full">
      <div className="salesHistory">
        <h1 className="text-cardMainHead text-[13.28px] md:text-base font-semibold">
          Sales History
        </h1>
      </div>

      <div className="border-b border-gray-200 my-[9.96px] md:my-3"></div>
      <div>
        <h1 className="text-[10px] text-textMain font-semibold md:text-xs mb-3">
          RECENT
        </h1>
      </div>

      {AnalysticsCustomerData.map((customer, index) => (
        <div key={index} className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <div>
              <Image src={customer.customerImage} alt="customer" />
            </div>
            <div>
              <h1 className="text-sm font-medium text-cardMainHead mb-1">
                {customer.customerName}
              </h1>
              <p className="text-xs font-medium text-textMain">
                {customer.customerDetail}
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm text-textMain font-medium">
              ${customer.customerPrice}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SaleHistory;
