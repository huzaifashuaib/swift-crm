import { CiSearch } from "react-icons/ci";
import AddProductForm from "../addProductForm/AddProductForm";

const AddProductHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="links flex items-center">
        <h1 className="border-b-4 border-b-btnColor px-2 py-4 text-base font-semibold text-btnColor">
          Products (0)
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="searchBox ">
          <div className="input-search flex rounded-sm focus:border focus:border-none ">
            <input
              type="text"
              className="py-[6px] px-3 border border-gray-200"
              placeholder="Type Here"
            />
            <button className="flex items-center gap-2 bg-btnColor rounded-r-[4px] py-[6px] px-3 text-white br-">
              <CiSearch />
              Search
            </button>
          </div>
        </div>
        <div>
          <AddProductForm />
        </div>

      </div>
    </div>
  );
};

export default AddProductHeader;
