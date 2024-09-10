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
              <th scope="col"  className="py-2 px-4 rounded-tl-[4.15px] rounded-bl-[4.15px]">
                <div className="my-[10.79px] w-20">Name</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px]">Address</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px] w-20">Postal Code</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px] w-32">Product Name</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px] w-20">Qunatity</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px] w-14">Price</div>
              </th>
              <th scope="col">
                <div className="my-[10.79px] w-16">Total Bill</div>
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
                    {order.products?.map((product: PRODUCT,) => (
                      <div key={product.id} className="my-[6.64px] text-textMain font-medium text-xs">
                        {product.name}
                      </div>
                    ))}
                  </td>

                  <td>
                    {order.products?.map((product: PRODUCT) => (
                      <div key={product.id} className="my-[6.64px] text-textMain font-medium text-xs">
                        {product.quantity}
                      </div>
                    ))}
                  </td>

                  <td>
                    {order.products?.map((product: PRODUCT) => (
                      <div key={product.id} className="my-[6.64px] text-textMain font-medium text-xs">
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
