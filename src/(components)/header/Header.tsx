import Image from "next/image";
import useHeader from "./useHeader";
import DateRange from "./datepicker/DateRangePicker";

const Header = async ({ pageName }: { pageName: string }) => {
  const { userImage, userName } = await useHeader();

  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-4">
      <div className="flex">
        <h1 className="mt-[26.56px] md:mt-0 text-cardMainHead text-[26.56px] md:text-[32px] font-bold">
          {pageName}
        </h1>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="">
          <DateRange />
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-[43.99px] h-[43.99px] md:w-[44px] md:h-[44px] lg:w-[53px] lg:h-[53px]">
            <Image
              src={userImage}
              alt="User Image"
              layout="fill"
              className="object-cover rounded-full"
              priority={false}
            />
          </div>
          <p className="text-cardMainHead text-[13.28px] md:text-base font-bold">
            {userName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
