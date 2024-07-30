import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/authOptions";


const Header = async({pageName}:{pageName:string}) => {
  
  const session = await getServerSession(authOptions);
  console.log(session,"dsadasd")
  const { profileImg } = svgIcon;
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-cardMainHead text-[32px] font-bold">{pageName}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div>1,2,3</div>
        <div className="flex items-center gap-2">
          <div className="w-[53px] h-[53px]">
            <Image src={profileImg} alt="" />
          </div>
          <div>
            <p className="text-cardMainHead text-base font-bold">
              Sophia Chester
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
