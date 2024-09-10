import OrderHeader from "@/(components)/ecommerceStore/orders/orderHeader/OrderHeader";
import OrderTable from "@/(components)/ecommerceStore/orders/ordersTable/OrderTable";
import React from "react";

const Orders = () => {
  return (
    <div>
      <div>
        <OrderHeader />
      </div>

      <div>
        <OrderTable />
      </div>
    </div>
  );
};

export default Orders;
