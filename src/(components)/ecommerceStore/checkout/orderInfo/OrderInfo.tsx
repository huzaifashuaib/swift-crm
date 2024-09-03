"use client";

import React from "react";
import useOrderInfo from "./useOrderInfo";

const OrderInfo = () => {
  const { formData, handleChange, handleSubmit } = useOrderInfo();
  return (
    <>
      <div className="shippingAdrss">
        <div>
          <h1 className=" font-bold text-lg mb-8 text-center text-btnColor">
            Shipping Address
          </h1>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="w-1/2 ">
          <input
            type="text"
            name="firstName"
            id="name"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-white border border-btnColor text-sm rounded-lg focus:ring-btnColor focus:border-btnColor block w-full p-2.5 placeholder-btnColor text-black my-2"
            placeholder="First Name"
            required
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            name="lastName"
            id="name"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-white border border-btnColor text-sm rounded-lg focus:ring-btnColor focus:border-btnColor block w-full p-2.5 placeholder-btnColor text-black my-2"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      <div>
        <input
          type="text"
          name="address"
          id="name"
          value={formData.address}
          onChange={handleChange}
          className="bg-white border border-btnColor text-sm rounded-lg focus:ring-btnColor focus:border-btnColor block w-full p-2.5 placeholder-btnColor text-black my-2"
          placeholder="Street Address"
          required
        />
      </div>

      <div className="flex gap-3">
        <div className="w-1/2 ">
          <input
            type="text"
            name="city"
            id="name"
            value={formData.city}
            onChange={handleChange}
            className="bg-white border border-btnColor text-sm rounded-lg focus:ring-btnColor focus:border-btnColor block w-full p-2.5 placeholder-btnColor text-black my-2"
            placeholder="City"
            required
          />
        </div>
        <div className="w-1/2">
          <input
            type="number"
            name="phoneNumber"
            id="name"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="bg-white border border-btnColor text-sm rounded-lg focus:ring-btnColor focus:border-btnColor block w-full p-2.5 placeholder-btnColor text-black my-2"
            placeholder="Phone Number"
            required
          />
        </div>
      </div>

      <div className="w-1/2">
        <input
          type="number"
          name="postCode"
          id="name"
          value={formData.postCode}
          onChange={handleChange}
          className="bg-white border border-btnColor text-sm rounded-lg focus:ring-btnColor focus:border-btnColor block w-full p-2.5 placeholder-btnColor text-black my-2"
          placeholder="Postel Code"
          required
        />
      </div>

      <div className="mt-4 cursor-pointer" onClick={handleSubmit}>
        <div className="px-2 py-[7.5px] border border-btnColor text-center rounded-[3.2px] w-full bg-btnColor flex justify-between items-center  text-themeLight">
          <div className=" text-sm font-semibold text-center w-full">
            Place Order
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderInfo;
