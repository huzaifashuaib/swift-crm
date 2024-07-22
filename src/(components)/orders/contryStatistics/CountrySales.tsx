import Map from "./Map";
import Sales from "./Sales";

const CountrySales = () => {
  return (
    <div className="bg-[#FFF] py-6 px-4 border-custom border-custom-border-color rounded-[10.5px]">
      <div>
        <h1 className="text-cardMainHead text-base font-semibold">
          Country Sales Statistics
        </h1>
      </div>
      <div className="border-b border-gray-200 my-3"></div>

      <div>
        <Map />
      </div>

      <div className="border-b border-gray-200 my-3"></div>

      <div>
      <Sales />
      </div>

    </div>
  );
};

export default CountrySales;
