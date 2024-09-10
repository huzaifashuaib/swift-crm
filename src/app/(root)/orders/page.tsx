import Header from "@/(components)/header/Header";
import BestSellingProduct from "@/(components)/orders/bestSellingProduct/BestSellingProduct";
import CountrySales from "@/(components)/orders/contryStatistics/CountrySales";
import SalesStatistics from "@/(components)/orders/salesStatistic/SaleStatistics";
import React from "react";

const Orders = () => {
  return (
    <div>
      <div className="mb-5 md:mb-[62px] ml-[9px]">
      <Header pageName="Order Overview" />
      </div>

      <div className="md:flex gap-[26px]">
        <div className="w-full md:w-[65%]">
          <div>
            <SalesStatistics />
          </div>
          <div className="mt-5">
            <BestSellingProduct />
          </div>
        </div>

        <div className="w-full md:w-[35%] mt-[20px] md:mt-0">
          <div>
            <CountrySales />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
