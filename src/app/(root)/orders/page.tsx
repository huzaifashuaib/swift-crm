import Header from "@/(components)/header/Header";
import BestSellingProduct from "@/(components)/orders/bestSellingProduct/BestSellingProduct";
import CountrySales from "@/(components)/orders/contryStatistics/CountrySales";
import SalesStatistics from "@/(components)/orders/salesStatistic/SaleStatistics";
import React from "react";

const Orders = () => {
  return (
    <div>
      <div className="mb-[62px] ml-[9px]">
      <Header pageName="Order Overview" />
      </div>

      <div className="flex gap-[26px]">
        <div className="w-[65%]">
          <div>
            <SalesStatistics />
          </div>
          <div className="mt-5">
            <BestSellingProduct />
          </div>
        </div>

        <div className="w-[35%]">
          <div>
            <CountrySales />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
