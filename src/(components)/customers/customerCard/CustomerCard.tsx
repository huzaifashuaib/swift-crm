import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import { CustomerCardType } from "@/types/types";

const CustomerCard = ({svgIcon,text,total,color,textClr,border}:CustomerCardType) => {
  return (
    <div className={`bg-${color ? color : "white"} py-[34.5px] px-6 rounded-[10.5px] ${border && `border-custom border-custom-border-color`} `}>
      <div className="flex gap-[8.5px] items-center ">
        <div>
          <Image src={svgIcon} alt="" />
        </div>
        <div>
          <div className="mb-2">
            <h1 className={`text-[15px] font-semibold text-${textClr ? textClr : "black"} `}>
              {text}
            </h1>
          </div>
          <div>
            <h1 className={`text-2xl font-bold text-${textClr ? textClr : "black"} `}>{total}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
