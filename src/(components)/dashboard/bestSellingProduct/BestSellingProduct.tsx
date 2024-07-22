import React from "react";
import ProductCards from "./ProductCards";
import { svgIcon } from "@/constants/svgIcon";

const BestSellingProduct = () => {
  const { cupImg, bowelImg, glassImg, plateImg } = svgIcon;
  return (
    <div className="bg-[#FFFFFF] pt-6 px-4 pb-[58.5px] border-custom border-custom-border-color rounded-[10.5px]">
      <div className="sellingProduct">
        <h1 className="text-cardMainHead text-base font-semibold">
          Best Selling Products
        </h1>
      </div>
      <div className="border-b border-gray-200 my-3"></div>
      <div className="flex flex-col gap-3">
        <ProductCards
          cardImg={bowelImg}
          title={"Ceramic Bowl"}
          subtitle={"HomeGoods"}
          price={29}
        />
        <ProductCards
          cardImg={cupImg}
          title={"Ceramic Mug"}
          subtitle={"Potterific"}
          price={59}
        />
        <ProductCards
          cardImg={glassImg}
          title={"Vase"}
          subtitle={"Flower Child"}
          price={99}
        />
        <ProductCards
          cardImg={plateImg}
          title={"Wooden Bowl"}
          subtitle={"Wood Co."}
          price={30}
        />
      </div>
    </div>
  );
};

export default BestSellingProduct;
