"use client";
import { addOrder } from "@/redux/slices/orderSlice";
import { clearCart } from "@/redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

import toast from "react-hot-toast";
const useOrderInfo = () => {
  const cart = useAppSelector((state) => state.product.cart);
  const router=useRouter()

  const totalBill = cart.reduce((acc, currentValue) => {
    const quantity = currentValue.quantity;
    const price = currentValue.price;
    const totalPrice = acc + quantity * price;
    return totalPrice;
  }, 0);

  const totalProfit = cart.reduce((acc, currentValue) => {
    const price = currentValue.price;
    const purchasePrice = currentValue.purchasePrice;
    const totalProfit = acc+(price - purchasePrice)
    return totalProfit;
  }, 0);

console.log(cart)
  console.log(totalBill)
  console.log(totalProfit)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phoneNumber: "",
    postCode: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getDate = () => {
    const date = new Date();
    const isoDate = date.toISOString().split('T')[0];
    return isoDate
  };
  
  const handleSubmit = async () => {

    const date=getDate()
    const orderDetail = {
      ...formData,
      products:[...cart],
      totalBill,
      date,
      totalProfit
    };
    try {
      console.log(orderDetail)
      setLoading(true);
      const resultAction = await dispatch(addOrder(orderDetail));
      setLoading(false);
      if (addOrder.rejected.match(resultAction)) {
        const errorMessage = resultAction.payload as string;
        toast.error(errorMessage);
      } else {
        toast.success("Successfully Order Sended 📦");
        dispatch(clearCart())
        router.push('/ecommerce/shop')
        setFormData({
         firstName: "",
          lastName: "",
          address: "",
          city: "",
          phoneNumber: "",
          postCode: "",
        });
      }
    } catch (error: any) {
      toast.error(error?.response?.data);
    }
  };
  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useOrderInfo;
