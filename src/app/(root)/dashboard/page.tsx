import BestSellingProduct from "@/(components)/dashboard/bestSellingProduct/BestSellingProduct";
import CustomerStatus from "@/(components)/dashboard/customersStatus/CustomerStatus";
import MonthlyIncome from "@/(components)/dashboard/monthlyIncome/MonthlyIncome";
import SummaryCard from "@/(components)/dashboard/summaryCard/SummaryCard";
import TargetOrder from "@/(components)/dashboard/targetOrder/TargetOrder";
import Header from "@/(components)/dashboard/header/Header";
import CityOrderStatistics from "@/(components)/dashboard/cityOrderStatistics/CityOrderStatistics";

export default function DashBoard() {
  return (
    <div className="">
      <div className="mb-[59px]">
        <Header />
      </div>

      <div className="w-full flex">
        <div className="w-[72%]">
          <div className="MonthlyIncome flex gap-[21px] mb-[21px]">
            <div className="w-[160px]">
              <TargetOrder />
            </div>
            <div>
              <MonthlyIncome />
            </div>
          </div>

          <div className="graphSection flex gap-3 justify-between mb-[21.62px]">
            <SummaryCard color="rgba(98, 145, 44, 1)" />
            <SummaryCard color="rgba(237, 77, 92, 1)" />
            <SummaryCard color="rgba(65, 165, 255, 1)" />
          </div>

          <div className="customerSection">
            <CustomerStatus />
          </div>
        </div>

        <div className="w-[28%] ml-[21px]">
          <div>
            <BestSellingProduct />
          </div>
          <div className="mt-[22px]">
            <div>
            <CityOrderStatistics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
