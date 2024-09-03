"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { addToCart, removeCartProduct } from "@/redux/slices/productSlice";
import toast from "react-hot-toast";

const useCartCard = () => {
  const addToCartProduct = useAppSelector((state) => state.product.cart);
  const allProduct = useAppSelector((state) => state.product);
  const [cartProduct, setCartProduct] = useState(addToCartProduct);
  const dispatch = useAppDispatch();

  const handleAddToCart = (productId: string) => {
    dispatch(addToCart(productId));
    const product = allProduct.product.find(
      (product) => product.id === productId
    );
    if (product) {
      if (product.quantity > 0) {
        toast.success("Product quantity updated in cart!");
      } else {
        toast.error("Product Out of Stock");
      }
    }
  };
  const handleRemoveToCart = (productId: string) => {
    dispatch(removeCartProduct(productId));
   

    if(addToCartProduct){
      const product = addToCartProduct.find(
          (product) => product.id === productId
        );
        if (product) {
          if (product.quantity > 1) {
            toast.success("Product quantity updated in cart!");
          } 
          else{
            toast.error("Product Remove from Cart")
          }
        }
    }
  };

  useEffect(() => {
    setCartProduct(addToCartProduct);
  }, [addToCartProduct]);
  return {
    IoIosAdd,
    GrFormSubtract,
    cartProduct,
    handleAddToCart,
    handleRemoveToCart,
  };
};

export default useCartCard;
