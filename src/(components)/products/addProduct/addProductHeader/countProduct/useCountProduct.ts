"use client"

import { useAppSelector } from "@/redux/store"

const useCountProduct = () => {
    const {product}=useAppSelector((state)=>state.product)
    const productLength=product?.length
  return {
    productLength
  }
}

export default useCountProduct