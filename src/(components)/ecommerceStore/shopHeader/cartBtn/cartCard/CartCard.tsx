"use client";
import Image from "next/image";
import React from "react";
import useCartCard from "./useCartCard";
import abc from "../../../../../../public/images.jpeg";
import { addToCart, removeCartProduct } from "@/redux/slices/productSlice";

const CartCard = () => {
  const { IoIosAdd, GrFormSubtract, cartProduct,handleAddToCart,
    handleRemoveToCart } = useCartCard();

  return (
    <>
      {cartProduct.map((product) => (
        <div key={product.id} className="card border-custom p-3 rounded-md shadow-md mt-3 flex items-center gap-3">
          <div className="relative w-24 h-24">
            <Image
              src={product.imgUrl || ""}
              alt="product image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="detail">
            <div>
              <h1 className="text-btnColor">{product.name}</h1>
            </div>
            <div>
              <h2 className="text-btnColor">{product.price} $</h2>
            </div>
            <div className=" flex items-center gap-3">
              <div className=" border-custom inline-block rounded-md cursor-pointer"   onClick={() => product.id && handleAddToCart(product.id)}>
                <IoIosAdd />
              </div>
              <div className="text-btnColor">{product.quantity}</div>
              <div className=" border-custom inline-block rounded-md cursor-pointer"   onClick={() => product.id && handleRemoveToCart(product.id)}>
                <GrFormSubtract />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartCard;
