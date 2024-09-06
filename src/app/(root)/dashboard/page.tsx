import BestSellingProduct from "@/(components)/dashboard/bestSellingProduct/BestSellingProduct";
import CustomerStatus from "@/(components)/dashboard/customersStatus/CustomerStatus";
import MonthlyIncome from "@/(components)/dashboard/monthlyIncome/MonthlyIncome";
import TargetOrder from "@/(components)/dashboard/targetOrder/TargetOrder";
import Header from "@/(components)/dashboard/header/Header";
import CityOrderStatistics from "@/(components)/dashboard/cityOrderStatistics/CityOrderStatistics";
import Profit from "@/(components)/dashboard/summaryCard/profit/Profit";
import Expense from "@/(components)/dashboard/summaryCard/expense/Expense";
import Customer from "@/(components)/dashboard/summaryCard/customers/Customer";

export default function DashBoard() {
  return (
    <div className="">
      <div className="mb-[20px] md:mb-[59px]">
        <Header />
      </div>

      <div className="w-full md:flex gap-[21px] h-auto">
        <div className="w-full md:w-[72%]  flex flex-col h-full">
          <div className="MonthlyIncome md:flex gap-[21px] mb-[21px]">
            <div className="w-full md:w-[160px] mb-5 md:mb-0">
              <TargetOrder />
            </div>
            <div>
              <MonthlyIncome />
            </div>
          </div>

          <div className="graphSection flex gap-[17.18px] md:gap-3 justify-between mb-[21.62px] overflow-y-auto">
            <Profit />
            <Expense />
            <Customer />
          </div>
        </div>

        <div className="w-full md:w-[28%] mb-[21.62px]">
          <BestSellingProduct />
        </div>
      </div>

      <div className="w-full md:flex h-auto">
        <div className="w-full md:w-[72%]">
            <CustomerStatus />
        </div>
        <div className="w-full md:w-[28%] md:ml-[21px]">
          {/* <div className="mt-[22px]"> */}
          
              <CityOrderStatistics />
          
        </div>
      </div>
    </div>
  );
}
