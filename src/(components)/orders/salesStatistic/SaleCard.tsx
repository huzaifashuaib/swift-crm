
import { OrderSalesCardType } from "@/types/types";
import Image from "next/image";

const SaleCard = ({icon,text,statics,subtext}:OrderSalesCardType) => {
  return (
    <div className="flex min-w-[181.73px] gap-[9.96px] md:gap-[12px]">
      <div className="flex-shrink-0">
        <Image src={icon} alt="icon" />
      </div>
      <div>
        <h3 className="text-cardSub mb-3 text-[12.45px] md:text-[15px]">{text}</h3>
        <h1 className="text-xl md:text-2xl font-bold">
        {statics} <span className="text-[12.45px] md:text-[15px] font-semibold text-cardSub">{subtext} </span>
        </h1>
      </div>
    </div>
  );
};

export default SaleCard;
