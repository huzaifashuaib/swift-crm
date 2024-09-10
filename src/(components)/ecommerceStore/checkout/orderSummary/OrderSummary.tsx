"use client"
import React from "react";
import BegSummary from "./begSummary/BegSummary";
import useOrderSummary from "./useOrderSummary";

const OrderSummary = () => {
    const {totalBill}=useOrderSummary()

  return (
    <div>
      <h1 className=" font-bold text-lg py-2 text-center text-btnColor">Order Summary </h1>
      <div>
        <div className="flex justify-between py-4 px-2">
          <h1 className="font-semibold text-lg text-btnColor">SubTotal</h1>
          <h1 className="font-medium text-btnColor">{totalBill} $</h1>
        </div>
        <hr />
        <div className="flex justify-between py-4 px-2">
          <h1 className="font-semibold text-lg text-btnColor">Total</h1>
          <h1 className="font-medium text-btnColor">{totalBill} $</h1>
        </div>
      </div>

      <div className="mt-4">
        <BegSummary />
      </div>
    </div>
  );
};

export default OrderSummary;
