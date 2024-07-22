import Image from "next/image";
import SaleCard from "./SaleCard";
import { svgIcon } from "@/constants/svgIcon";

const SalesStatistics = () => {
  const { revenue, sales, views, orderGraph } = svgIcon;
  return (
    <div className="py-6 px-3 bg-white border-custom border-custom-border-color rounded-[10.5px]">
      <div>
        <h1 className="text-cardMainHead text-base font-semibold">
          Sales Statistic
        </h1>
      </div>
      <div className="border-b border-gray-200 my-3"></div>
      <div className="flex gap-2">
        <SaleCard
          icon={revenue}
          text={"Total Revenue"}
          statics={"$27,733.00"}
          subtext={"Orders"}
        />
        <div className="border-l border-gray-200 "></div>
        <SaleCard
          icon={sales}
          text={"Total Sales"}
          statics={"9,234"}
          subtext={"Products"}
        />

        <div className="border-l border-gray-200 "></div>
        <SaleCard
          icon={views}
          text={"Total Views"}
          statics={"15,788"}
          subtext={"Views"}
        />
      </div>

      <div className="mt-3">
        <Image src={orderGraph} alt="" />
      </div>
    </div>
  );
};

export default SalesStatistics;
