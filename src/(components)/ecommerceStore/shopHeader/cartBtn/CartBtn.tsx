"use client";

import { IoMdCart } from "react-icons/io";
import useCartBtn from "./useCartBtn";
import CartCard from "./cartCard/CartCard";
import SubTotal from "./subTotal/SubTotal";
import CustomBtn from "@/(components)/customBtn/CustomBtn";
import Link from "next/link";

const CartBtn = () => {
  const { productCount, openCart, handleToggle, MdCancelPresentation } =
    useCartBtn();

  return (
    <>
      <div className="text-xl text-btnColor relative">
        <button
          className="border-2 border-btnColor rounded-md px-4 py-1 hover:bg-btnColor hover:text-white hover:border-activeLink"
          onClick={handleToggle}
        >
          <IoMdCart />
        </button>

        <span className="w-[18px] h-[18px] text-white bg-red-500 text-xs rounded-full absolute right-[2px] bottom-0 flex justify-center items-center hover:bg-red-600 hover:text-white cursor-pointer">
          {productCount}
        </span>
      </div>

      <div
        className={`fixed top-0 right-0 w-1/4 h-full z-20 bg-white px-3 py-3 transition-transform duration-300 shadow-lg ${
          openCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between py-5 px-2">
          <div>
            <h1 className="text-2xl text-btnColor font-semibold">
              Shopping Cart
            </h1>
          </div>
          <div
            className="text-3xl flex justify-end cursor-pointer text-btnColor"
            onClick={handleToggle}
          >
            <MdCancelPresentation />
          </div>
        </div>

        <div className="h-full">
          <div className="h-3/5 overflow-y-auto shadow-md ">
            <CartCard />
          </div>

          <div className="h-2/5  pt-4">
            <SubTotal />
            <Link href={"checkout"} className="py-3 cursor-pointer">
              <CustomBtn text="Checkout" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBtn;
