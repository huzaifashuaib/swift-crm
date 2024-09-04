"use client";
import CustomBtn from "@/(components)/customBtn/CustomBtn";
import useOrderTable from "./useOrderTable";
import { FaSpinner } from "react-icons/fa";
import { ORDER_FORMDATA, PRODUCT } from "@/types/types";

const OrderTable = () => {
  const { orders, fetchOrders, loading,handleOrder,btnLoading } = useOrderTable();
 
  return (
    <>
      <button className="my-4 inline-block" onClick={fetchOrders}>
        <CustomBtn text="Refresh Order" />
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
                <div className="my-[10.79px]">Name</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px]">Address</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px]">Postal Code</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px]">Product Name</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px]">Qunatity</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px]">Price</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px]">Total Bill</div>
              </th>
              <th
                scope="col"
                className="rounded-tr-[4.15px] rounded-br-[4.15px]"
              >
                <div className="my-[10.79px]">Status</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={9} className="text-center py-6 text-3xl">
                  <FaSpinner className="animate-spin mr-2 inline-block" />
                </td>
              </tr>
            ) : orders?.length !== 0 ? (
              orders?.map((order: ORDER_FORMDATA,) => (
                <tr key={order.id} className={`bg-white hover:bg-gray-50 ${order.status=="completed" ? "line-through" :""} `}>
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id={`checkbox-table-search-${order.id}`}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`checkbox-table-search-${order.id}`}
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-[6.64px] my-[6.64px]">
                      <div className="text-cardMainHead text-xs font-medium mb-[3.32px]">
                        {order.firstName} {order.lastName}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="my-[6.64px] text-textMain font-medium text-xs w-24">
                      {order.address} {order.city}
                    </div>
                  </td>
                  <td>
                    <div className="my-[6.64px] text-textMain font-medium">
                      <div className="flex items-center gap-[6.64px] my-[6.64px]">
                        <div className="text-textMain font-medium">
                          {order.postCode}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {order.products?.map((product: PRODUCT) => (
                      <div className="my-[6.64px] text-textMain font-medium text-xs">
                        {product.name}
                      </div>
                    ))}
                  </td>

                  <td>
                    {order.products?.map((product: PRODUCT) => (
                      <div className="my-[6.64px] text-textMain font-medium text-xs">
                        {product.quantity}
                      </div>
                    ))}
                  </td>

                  <td>
                    {order.products?.map((product: PRODUCT) => (
                      <div className="my-[6.64px] text-textMain font-medium text-xs">
                        {product.price}
                      </div>
                    ))}
                  </td>
                  <td>
                    <div className="my-[6.64px] text-textMain font-medium text-xs w-24">
                      {order.totalBill} $
                    </div>
                  </td>
                  <td>
                    <button onClick={()=>handleOrder(order.id)} className=" cursor-pointer" >
                      {btnLoading == order.id ? (
                        <FaSpinner className=" animate-spin text-center" />
                      ) : (
                        <CustomBtn text={order.status=="completed" ? "Delivered" :"Pending"} />
                      )}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="text-center py-6 text-3xl">
                  No Order Found 🛒
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
