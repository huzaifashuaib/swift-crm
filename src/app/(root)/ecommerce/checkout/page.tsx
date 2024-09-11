import React from "react";
import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";
import OrderInfo from "@/(components)/ecommerceStore/checkout/orderInfo/OrderInfo";
import OrderSummary from "@/(components)/ecommerceStore/checkout/orderSummary/OrderSummary";
const Checkout = () => {
  const { logo } = svgIcon;
  return (
    <div>
      <div>
        <div className="flex justify-center items-center mt-4 mb-2">
          <Image src={logo} alt="logo-img" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold py-3 text-btnColor text-center">
            Check<span className="text-black">Out</span>
          </h1>
        </div>
      </div>

      <div className="md:flex gap-6 mt-6">
        <div className="w-full md:w-3/5">
          <OrderInfo />
        </div>

        <div className="w-full md:w-2/5">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
