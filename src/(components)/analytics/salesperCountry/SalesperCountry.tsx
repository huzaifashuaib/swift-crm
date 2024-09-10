import CountrySaleGraph from "./CountrySaleGraph/CountrySaleGraph";

const SalesperCountry = () => {
  return (
    <div className="bg-white pl-[13.28px] md:pl-4 pr-[11.47px] md:pr-[34.5px] py-5 md:py-6  border-custom border-custom-border-color rounded-[10.5px]">
      <div className="salesperCountry">
        <h1 className="text-cardMainHead text-[13.28px] md:text-base font-semibold">
          Sales per Country{" "}
          <span className="text-textMain text-[13.28px] md:text-base">
            (9,234 Sales)
          </span>{" "}
        </h1>
      </div>

      <div className="border-b border-gray-200 my-[9.96px] md:my-3"></div>

      <div>
        <CountrySaleGraph />
      </div>
    </div>
  );
};

export default SalesperCountry;
