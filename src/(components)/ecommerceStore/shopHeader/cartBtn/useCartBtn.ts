"use client";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

const useCartBtn = () => {
  const addToCartProduct = useAppSelector((state) => state.product.cart);
  const [productCount, setProductCount] = useState(0);
  const [cartProduct, setCartProduct] = useState(addToCartProduct);
  const [openCart, setOpenCart] = useState(false);

  const countProducts = () => {      
    const totalQuantity = addToCartProduct.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);
    setProductCount(totalQuantity);
  };

  useEffect(() => {
    countProducts();
    setCartProduct(addToCartProduct)
  }, [addToCartProduct]);


  const handleToggle=()=>setOpenCart(!openCart)
  return {
    productCount,
    openCart,
    handleToggle,
    MdCancelPresentation,
    IoIosAdd,
    GrFormSubtract,
    cartProduct

  };
};

export default useCartBtn;
