import React from "react";
import useSubTotal from "./useSubTotal";

const SubTotal = () => {
  const { totalBill } = useSubTotal();

  return (
    <div>
      <div className="flex items-center justify-between mx-3 my-3">
        <div>
          <h1 className="font-semibold text-2xl text-btnColor">SubTotal: </h1>
        </div>
        <div className="font-semibold text-xl text-btnColor">{totalBill} $</div>
      </div>
    </div>
  );
};

export default SubTotal;
