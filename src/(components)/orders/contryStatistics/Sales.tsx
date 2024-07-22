import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";

const Sales = () => {
  const { arrowImg, countryFlag } = svgIcon;
  return (
    <div>
      <div className="flex items-center gap-[15px]">
        <div>
          <h1 className="text-2xl font-bold text-cardMainHead">
            55,467
            <span className="text-orderSpanColor text-[15px] font-semibold">
              {" "}
              Orders
            </span>
          </h1>
        </div>
        <div className="profit">
          <div className="flex items-center justify-center gap-[1px] bg-success rounded-[15.75px] py-[0.75px] px-[4px]">
            <div>
              <Image src={arrowImg} alt="" />
            </div>
            <div className=" text-[10.5px] font-bold text-[#62912C]">5.6%</div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <p className="text-textMain text-[15px] font-semibold">
          Sales from 1 - 7 July, 2023
        </p>
      </div>

      <div className="flex items-center gap-6 p-[6.64px]">
        <div>
          <div className="flex items-center gap-[1.66px] ">
            <div>
              <Image src={countryFlag} alt="" width={32} />
            </div>
            <div>
            <h2 className="text-xs font-medium text-cardSub">
                United States
              </h2>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xs text-textMain font-medium">20,000</h1>
        </div>

        <div>
          <div className="profit">
            <div className="flex items-center justify-center gap-[1px] bg-success rounded-[15.75px] py-[0.75px] px-[4px]">
              <div>
                <Image src={arrowImg} alt="" />
              </div>
              <div className=" text-[10.5px] font-bold text-[#62912C]">
                5.6%
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex items-center gap-6 mt-[9.96px] p-[6.64px]">
        <div>
          <div className="flex items-center gap-[1.66px]">
            <div>
              <Image src={countryFlag} alt="" width={32} />
            </div>
            <div>
              <h2 className="text-xs font-medium text-cardSub">
                United States
              </h2>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xs text-textMain font-medium">20,000</h1>
        </div>

        <div>
          <div className="profit">
            <div className="flex items-center justify-center gap-[1px] bg-success rounded-[15.75px] py-[0.75px] px-[4px]">
              <div>
                <Image src={arrowImg} alt="" />
              </div>
              <div className=" text-[10.5px] font-bold text-[#62912C]">
                5.6%
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Sales;
