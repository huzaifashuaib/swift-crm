import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";
import { CardType } from "@/types/types";

function ProductCards({cardImg,title, subtitle, price}:CardType) {
  
  return (
    <div className="flex justify-between items-center bg-cardBgColor p-2">
      <div className="productInfo flex items-center gap-2">
        <div className="productImage">
          <Image src={cardImg} width={67} height={67} alt="" />
        </div>
        <div className="productInfo">
          <h1 className="text-sm font-semibold text-cardHead mb-2">{title}</h1>
          <p className="text-sm font-normal text-cardSub">{subtitle}</p>
        </div>
      </div>
      <div className="price">
        <h1 className="text-cardHead font-semibold">${price}</h1>
      </div>
    </div>
  );
}

export default ProductCards;
