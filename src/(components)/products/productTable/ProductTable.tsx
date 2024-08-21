"use client";
import CustomBtn from "@/(components)/customBtn/CustomBtn";
import useProductTable from "./useProductTable";
import { FaSpinner } from "react-icons/fa";
import EditProduct from "./editProduct/EditProduct";
import { PRODUCT } from "@/types/types";
import DeleteProduct from "./deleteProduct/DeleteProduct";

const ProductTable = () => {
  const { products, fetchProducts, loading } = useProductTable();

  return (
    <>
      <button className="my-4 inline-block" onClick={fetchProducts}>
        <CustomBtn text="Refresh Product" />
      </button>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right border-separate text-cardMainHead border-spacing-y-[9.96px]">
          <thead className="text-sm font-semibold text-cardMainHead bg-tableHeadColor">
            <tr>
              <th
                scope="col"
                className="p-4 rounded-tl-[4.15px] rounded-bl-[4.15px]"
              >
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col">
                <div className="my-[10.79px]">Product Name</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px]">Price</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px]">Category</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px]">Quantity</div>
              </th>
              <th
                scope="col"
                className="rounded-tr-[4.15px] rounded-br-[4.15px]"
              >
                <div className="my-[10.79px]">Actions</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center py-6 text-3xl">
                  <FaSpinner className="animate-spin mr-2 inline-block" />
                </td>
              </tr>
            ) : products?.length !== 0 ? (
              products?.map((product: PRODUCT, index) => (
                <tr key={product.id} className="bg-white hover:bg-gray-50">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${index}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`checkbox-table-search-${index}`}
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-[6.64px] my-[6.64px]">
                      <div className="text-cardMainHead text-xs font-medium mb-[3.32px]">
                        {product.name}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="my-[6.64px] text-textMain font-medium text-xs">
                      {product.price}
                    </div>
                  </td>
                  <td>
                    <div className="my-[6.64px] text-textMain font-medium">
                      <div className="flex items-center gap-[6.64px] my-[6.64px]">
                        <div className="text-textMain font-medium">
                          {product.category}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="my-[6.64px] text-textMain font-medium text-xs">
                      {product.quantity}
                    </div>
                  </td>

                  <td>
                    <div className="my-[6.64px] flex items-center gap-[13.28px]">
                      <EditProduct id={product.id} />
                      <DeleteProduct id={product.id} />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-6 text-3xl">
                  No Product Found 🛒
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
