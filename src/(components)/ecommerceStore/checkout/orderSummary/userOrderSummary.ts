"use client"

import { useAppSelector } from '@/redux/store';
import React from 'react'

const userOrderSummary = () => {
    const cartProduct = useAppSelector((state) => state.product.cart);
    const totalBill = cartProduct.reduce((acc, currentValue) => {
        const quantity = currentValue.quantity;
        const price = currentValue.price;
        const totalPrice = acc + quantity * price;
        return totalPrice;
      }, 0);

      const countProducts=cartProduct.length
  return {
    totalBill,
    countProducts,
    cartProduct
  }
}

export default userOrderSummary