import { CiSearch } from "react-icons/ci";
import AddProductForm from "../addProductForm/AddProductForm";
import CountProduct from "./countProduct/CountProduct";

const AddProductHeader = () => {
  return (
    <div className="md:flex justify-between items-center">
      <div className="links flex items-center">
        <CountProduct />
      </div>

      <div className="mt-3">
        <AddProductForm />
      </div>
    </div>
  );
};

export default AddProductHeader;
