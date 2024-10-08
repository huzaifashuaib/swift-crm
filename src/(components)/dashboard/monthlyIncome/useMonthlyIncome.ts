"use client"
import { useAppSelector } from "@/redux/store"

const useMonthlyIncome = () => {
    const orderData=useAppSelector((state)=>state.order.order)
    const monthlyIncome = Array.isArray(orderData)
    ? orderData
        .map((order) => ({
          totalProfit: order.totalBill,
        }))
        .reduce((acc, currentValue) => acc + (currentValue.totalProfit || 0), 0)
    : 0;
      
   
  return {
    monthlyIncome  
}
}

export default useMonthlyIncome;