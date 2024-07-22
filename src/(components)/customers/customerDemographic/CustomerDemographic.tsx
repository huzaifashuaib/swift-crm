import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";

const CustomerDemographic = () => {
  const { Map, MajorityMem, MajorityNon } = svgIcon;
  return (
    <div>
      <div>
        <h1 className="text-cardMainHead text-base font-semibold">
          Customer Demographic
        </h1>
      </div>
      <div className="border-b border-gray-200 my-3"></div>
      <div>
        <div className="mb-3">
          <Image src={Map} alt="" />
        </div>
        <div className="flex gap-3">
          <div className="flex gap-3 items-center">
            <div className="circle">
              <Image src={MajorityMem} alt="" />
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-cardSub pr-5">
                Majority Members
              </h2>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="circle">
              <Image src={MajorityNon} alt="" />
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-cardSub">
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
