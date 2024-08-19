import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import CountrySaleGraph from "./CountrySaleGraph/CountrySaleGraph";

const SalesperCountry = () => {
  const { salePerCountry } = svgIcon;
  return (
    <div className="bg-[#FFFFFF] pl-4 pr-[34.5px] py-6  border-custom border-custom-border-color rounded-[10.5px]">
      <div className="salesperCountry">
        <h1 className="text-cardMainHead text-base font-semibold">
          Sales per Country <span>(9,234 Sales)</span>{" "}
        </h1>
      </div>

      <div className="border-b border-gray-200 my-3"></div>

      <div>
        <CountrySaleGraph />
      </div>
    </div>
  );
};

export default SalesperCountry;
