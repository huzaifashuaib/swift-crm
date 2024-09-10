import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";

const CustomerDemographic = () => {
  const { Map, MajorityMem, MajorityNon } = svgIcon;
  return (
    <div>
      <div>
        <h1 className="text-cardMainHead text-[13.28px] md:text-base font-semibold">
          Customer Demographic
        </h1>
      </div>
      <div className="border-b border-gray-200 my-3"></div>
      <div>
        <div className="mb-3 h-[216.54px] md:h-auto">
          <Image src={Map} alt="map" className="object-cover w-full h-full" />
        </div>
        <div className="flex gap[9.96px] md:gap-3">
          <div className="flex gap-[9.96px] md:gap-3 items-center">
            <div className="circle">
              <Image src={MajorityMem} alt="majority" />
            </div>
            <div>
              <h2 className="text-[12.45px] md:text-[15px] font-semibold text-cardSub md:pr-5">
                Majority Members
              </h2>
            </div>
          </div>
          <div className="flex gap-[9.96px] md:gap-3 items-center">
            <div className="circle">
              <Image src={MajorityNon} alt="major" />
            </div>
            <div>
              <h2 className="text-[12.45px] md:text-[15px]  font-semibold text-cardSub">
                Majority Non-Members
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDemographic;
