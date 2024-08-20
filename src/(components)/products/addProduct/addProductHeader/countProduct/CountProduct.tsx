"use client";

import useCountProduct from "./useCountProduct";

const CountProduct = () => {
  const { productLength } = useCountProduct();
  return (
    <>
      <h1 className="border-b-4 border-b-btnColor px-2 py-4 text-base font-semibold text-btnColor">
        Products ({productLength !== 0 ? productLength : 0})
      </h1>
    </>
  );
};

export default CountProduct;
