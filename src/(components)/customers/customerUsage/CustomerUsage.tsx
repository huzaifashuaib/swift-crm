const CustomerUsage = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="w-[65%]">
          <h1 className=" text-textMain text-[12.45px] md:text-[15px] font-semibold mb-2">
            Desktop Users
          </h1>
          <h2 className="text-cardMainHead text-xl md:text-2xl font-bold mb-2">65%</h2>
          <div className="h-[25.73px] md:h-[31px] bg-lightBlueClr rounded-tl-[5px] rounded-bl-[5px]"></div>
        </div>

        <div className="w-[35%]">
          <h1 className=" text-textMain text-[12.45px] md:text-[15px] font-semibold mb-2">
            Mobile Users
          </h1>
          <h2 className="text-cardMainHead text-xl md:text-2xl font-bold mb-2">35%</h2>
          <div className="h-[25.73px] md:h-[31px] bg-profitClr rounded-tr-[5px] rounded-br-[5px]"></div>
        </div>
      </div>
    </>
  );
};

export default CustomerUsage;
