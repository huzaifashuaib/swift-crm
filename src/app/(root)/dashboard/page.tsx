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
            <Profit/>
            <Expense />
            <Customer />
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
