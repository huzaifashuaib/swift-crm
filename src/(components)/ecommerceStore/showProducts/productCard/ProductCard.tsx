"use client";
import { useAppDispatch } from "@/redux/store";
import CartBtn from "./CartBtn/CartBtn";
import useProductCard from "./useProductCard";
import { PRODUCT } from "@/types/types";
import Image from "next/image";
import { addToCart } from "@/redux/slices/productSlice";
import { FaSpinner } from "react-icons/fa";

const ProductCard = () => {
  const { products, loading, handleAddToCart } = useProductCard();

  return (
    <div>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <FaSpinner className="animate-spin text-3xl" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product: PRODUCT) => (
            <div
              key={product.id}
              className="w-full max-w-[320px] bg-white border border-gray-400 rounded-lg shadow"
            >
              <div className="relative w-full h-64">
                <Image
                  className="rounded-t-lg"
                  src={product?.imgUrl || ""}
                  alt="product image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="px-5 py-3">
                <h5 className="text-lg font-semibold tracking-tight text-btnColor">
                  {product.name}
                </h5>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-base font-bold text-btnColor">
                    $ {product.price}
                  </span>
                  <button
                    onClick={() => product.id && handleAddToCart(product.id)}
                  >
                    <CartBtn text="Add" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
