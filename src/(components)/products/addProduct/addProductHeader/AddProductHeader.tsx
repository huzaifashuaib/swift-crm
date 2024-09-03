import { CiSearch } from "react-icons/ci";
import AddProductForm from "../addProductForm/AddProductForm";
import CountProduct from "./countProduct/CountProduct";

const AddProductHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="links flex items-center">
        <CountProduct />
      </div>

      <div>
        <AddProductForm />
      </div>
    </div>
  );
};

export default AddProductHeader;
