import Image from "next/image";
import { CustomerCardType } from "@/types/types";

const CustomerCard = ({svgIcon,text,total,color,bgClr,border}:CustomerCardType) => {
  return (
    <div className={`bg-${color ? color : "white"} py-[13.28px] px-4 md:py-[34.5px] md:px-6 rounded-[10.5px] ${border && `border-custom border-custom-border-color`} `}>
      <div className="flex gap-[8.5px] items-center ">
        <div className="w-[32px]">
          <Image src={svgIcon} alt="icon" />
        </div>
        <div>
          <div className="mb-[6.64px] md:mb-2">
            <h1 className={`text-[12.45px] md:text-[15px] font-semibold text-${bgClr ? "white" : "textMain"} `}>
              {text}
            </h1>
          </div>
          <div>
            <h1 className={`text-xl md:text-2xl font-bold text-${bgClr ? "white" : "black"} `}>{total}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
