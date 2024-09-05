"use client"
import { useAppSelector } from "@/redux/store"

const useProfit = () => {
    const orderData=useAppSelector((state)=>state.order.order)
    const totalProfit = Array.isArray(orderData)
    ? orderData
        .map((order) => ({
          totalProfit: order.totalProfit,
        }))
        .reduce((acc, currentValue) => acc + (currentValue.totalProfit || 0), 0)
    : 0;
      
   
  return {
    totalProfit
  }
}

export default useProfit