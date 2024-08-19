import Image from "next/image";
import useHeader from "./useHeader";
import Example from "./datepicker/DateRangePicker";


const Header = async ({ pageName }: { pageName: string }) => {
  const { userImage, userName } = await useHeader();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-cardMainHead text-[32px] font-bold">{pageName}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div>
         <Example />
        </div>
        <div className="flex items-center gap-2">
        <div className="rounded-full overflow-hidden w-[53px] h-[53px]">
            <Image
              src={userImage}
              alt=""
              width={53}
              height={53}
              className="object-cover" 
            />
          </div>
          <div>
            <p className="text-cardMainHead text-base font-bold">{userName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
