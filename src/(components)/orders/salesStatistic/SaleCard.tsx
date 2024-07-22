
import { OrderSalesCardType } from "@/types/types";
import Image from "next/image";

const SaleCard = ({icon,text,statics,subtext}:OrderSalesCardType) => {
  return (
    <div className="flex gap-[12px]">
      <div>
        <Image src={icon} alt="" />
      </div>
      <div>
        <h3 className="text-cardSub mb-3">{text}</h3>
        <h1 className="text-2xl font-bold">
        {statics} <span className="text-[15px] font-semibold text-cardSub">{subtext} </span>
        </h1>
      </div>
    </div>
  );
};

export default SaleCard;
