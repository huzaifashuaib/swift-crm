import BestSellingProduct from "@/(components)/dashboard/bestSellingProduct/BestSellingProduct";
import CustomerStatus from "@/(components)/dashboard/customersStatus/CustomerStatus";
import MonthlyIncome from "@/(components)/dashboard/monthlyIncome/MonthlyIncome";
import TargetOrder from "@/(components)/dashboard/targetOrder/TargetOrder";
import Header from "@/(components)/header/Header";



export default function Home() {
  return (
    <main className="">
     
       {/* <Header /> */}
       {/* <BestSellingProduct />       */}
       <TargetOrder />
       {/* <MonthlyIncome /> */}
       {/* <CustomerStatus /> */}
      
    </main>
  );
}
