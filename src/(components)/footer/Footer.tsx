import Image from "next/image";
import Link from "next/link";
import { svgIcon } from "@/constants/svgIcon";

const Footer = () => {
  const { logo, fb, insta, twitter } = svgIcon;
  return (
    <div className="mx-[70.5px] py-[17px]">
      <div className="flex justify-between gap-y-[10px] mt-[17px]">
        <div className="logo">
          <Image src={logo} alt="" />
        </div>
        <div className="links flex  gap-6">
          <div>
            <Link href={""} className="text-cardMainHead text-base font-normal">Dashboard</Link>
          </div>
          <div>
            <Link href={""} className="text-cardMainHead text-base font-normal">Customers</Link>
          </div>
          <div>
            <Link href={""} className="text-cardMainHead text-base font-normal">Order Overview</Link>
          </div>
          <div>
            <Link href={""} className="text-cardMainHead text-base font-normal">Analytics</Link>
          </div>
          <div>
            <Link href={""} className="text-cardMainHead text-base font-normal">Accounting</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-y-[5px] mt-[21px]">
        <div>
          <p className="text-cardMainHead text-base font-normal">Crafting Connections, One Customer at a Time.</p>
        </div>
        <div className="flex gap-6 items-center">
          <div>
            <Image src={fb} alt="" />
          </div>
          <div>
            <Image src={insta} alt="" />
          </div>
          <div>
            <Image src={twitter} alt="" />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 mb-8 mt-4"></div>

      <div className="flex justify-between ">
        <div>
          <div>
            <Link href={""} className="text-cardMainHead text-base font-normal">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <div>
            <p className="text-cardMainHead text-base font-medium">&copy; 2023 Mugna Technologies, Inc.</p>
          </div>
        </div>

        <div>
          <div>
            <Link href={""} className="text-cardMainHead text-base font-normal">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
