import BestSellingProduct from "@/(components)/dashboard/bestSellingProduct/BestSellingProduct";
import CustomerStatus from "@/(components)/dashboard/customersStatus/CustomerStatus";
import MonthlyIncome from "@/(components)/dashboard/monthlyIncome/MonthlyIncome";
import SummaryCard from "@/(components)/dashboard/summaryCard/SummaryCard";
import TargetOrder from "@/(components)/dashboard/targetOrder/TargetOrder";
import Header from "@/(components)/dashboard/header/Header";
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
            <SummaryCard /> 
            <SummaryCard /> 
            <SummaryCard /> 
          </div>

          <div className="customerSection">
            <CustomerStatus />
          </div>
        </div>


        
        <div className="w-[28%] ml-[21px]">
          <BestSellingProduct />
        </div>
      </div>
    </div>
  );
}
