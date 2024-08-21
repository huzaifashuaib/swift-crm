"use client";
import { deleteProduct } from "@/redux/slices/productSlice";
import { useAppDispatch } from "@/redux/store";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
const useDeleteProduct = (id: string | undefined) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = async () => {
    if (!id) {
      toast.error("Product ID is missing");
      return;
    }
    try {
      setLoading(true);
      const resultAction = await dispatch(deleteProduct({ id }));
      setLoading(false);

      if (deleteProduct.rejected.match(resultAction)) {
        const errorMessage = resultAction.payload as string;
        toast.error(errorMessage);
      } else {
        toast.success("Password succesfully Delete ✔");
      }
    } catch (error:any) {
      toast.error(error?.response?.data);
    }
  };
  return {
    handleDelete,
    loading,
    FaSpinner,
  };
};

export default useDeleteProduct;
