import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import { countryData } from "@/constants/countrySaleData";

const Sales = () => {
  const { arrowImg, countryFlag } = svgIcon;
  return (
    <div>
      <div className="flex items-center gap-[15px]">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-cardMainHead">
            55,467
            <span className="text-orderSpanColor text-[12.45px] md:text-[15px] font-semibold">
              {" "}
              Orders
            </span>
          </h1>
        </div>
        <div className="profit">
          <div className="flex items-center justify-center gap-[1px] bg-success rounded-[15.75px] py-[0.75px] px-[4px]">
            <div>
              <Image src={arrowImg} alt="arrow" />
            </div>
            <div className=" text-[10.5px] font-bold text-profitClr">5.6%</div>
          </div>
        </div>
      </div>

      <div className="my-[9.96px] md:my-3">
        <p className="text-textMain text-[12.45px] md:text-[15px] font-semibold">
          Sales from 1 - 7 July, 2023
        </p>
      </div>

      {countryData.map((country,index) => (
        <div  key={index} className="flex justify-between items-center  p-[6.64px]">
          <div className="w-[126.99px]">
            <div className="flex items-center gap-[1.66px] ">
              <div>
                <Image src={country.countryImage} alt="" width={32} />
              </div>
              <div>
                <h2 className="text-xs font-medium text-cardSub">
                  {country.countryName}
                </h2>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xs text-center text-textMain font-medium">{country.profit}</h1>
          </div>

          <div>
            <div className="profit">
              <div className="flex items-center justify-center gap-[1px] bg-success rounded-[15.75px] py-[0.75px] px-[4px]">
                <div>
                  <Image src={arrowImg} alt="arrow" />
                </div>
                <div className=" text-[10.5px] font-bold text-profitClr">
                  {country.percentage}%
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sales;
