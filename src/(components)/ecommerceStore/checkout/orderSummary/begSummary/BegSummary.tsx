"use client";

import React from "react";
import userOrderSummary from "../userOrderSummary";
import Image from "next/image";

const BegSummary = () => {
  const { countProducts, cartProduct } = userOrderSummary();

  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className=" font-bold text-lg text-btnColor"> Beg Summary</h1>
        <div className="w-4 h-4 rounded-full text-white bg-btnColor text-xs p-1 flex items-center justify-center">
          {countProducts}
        </div>
      </div>

      <div className="py-3">
        {cartProduct?.map((product) => (
          <div key={product.id} className="border-custom mb-3 shadow-md flex gap-2 bg-white">
            <div className="relative w-48 h-24">
              <Image src={product.imgUrl || ""} alt="productImage" layout="fill"
                  objectFit="cover"/>
            </div>
             <div>
              <h1 className="text-lg font-semibold px-3 py-2 text-btnColor">{product.name}</h1>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BegSummary;
