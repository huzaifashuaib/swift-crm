import OverAllSales from "@/(components)/analytics/overallSale/OverAllSales";
import SourcePurchase from "@/(components)/analytics/purchaseSource/SourcePurchase";
import SaleHistory from "@/(components)/analytics/salesHistory/SaleHistory";
import SalesperCountry from "@/(components)/analytics/salesperCountry/SalesperCountry";
import SaleperWeek from "@/(components)/analytics/salesperWeeks/SaleperWeek";
import Vistors from "@/(components)/analytics/vistors/Vistors";
import Header from "@/(components)/header/Header";
import React from "react";

const analytics = () => {
  return (
    <div>
      <div className="mb-[19px] md:mb-[62px] mt-[19px]">
        <Header pageName="Analytics" />
      </div>

      <div className="md:flex gap-6 mb-[23px] h-auto">
        <div className="oversales w-full md:w-[60%] mb-[20px] md:mb-0">
          <OverAllSales />
        </div>
        <div className="vistors w-full md:w-[40%] mb-[20px] md:mb-0">
          <Vistors />
        </div>
      </div>

      <div className="md:flex gap-[25px] mb-6 h-auto">
        <div className="sourcePurchase w-full md:w-[27%] mb-[20px] md:mb-0">
          <SourcePurchase />
        </div>
        <div className="sourcePurchase w-full md:w-[73%] mb-[20px] md:mb-0">
          <SaleperWeek />
        </div>
      </div>

      <div className="md:flex gap-6 h-auto">
        <div className="sourcePurchase w-full md:w-[55%] mb-[20px] md:mb-0">
          <SalesperCountry />
        </div>
        <div className="sourcePurchase w-full md:w-[45%]">
          <SaleHistory />
        </div>
      </div>
    </div>
  );
};

export default analytics;
