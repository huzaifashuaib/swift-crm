"use client"
import { useAppSelector } from "@/redux/store"

const useOverAllSale = () => {
    const orderData=useAppSelector((state)=>state.order.order)
    const totalExpense = Array.isArray(orderData)
    ? orderData
        .map((order) => ({
          totalProfit: order.totalBill,
        }))
        .reduce((acc, currentValue) => acc + (currentValue.totalProfit || 0), 0)
    : 0;
      
   
  return {
    totalExpense
  }
}

export default useOverAllSale;