"use client";
import { useAppDispatch } from "@/redux/store";
import { ChangeEvent, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import { editProduct, updateProduct } from "@/redux/slices/productSlice";

const useEditProduct = (id: string | undefined) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
    description: "",
  });
  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGetProductData = async () => {
    setLoading(true);
    toggleModal();
    if (!id) {
      toast.error("Product ID is missing");
      return;
    }
    try {
      const resultAction = await dispatch(editProduct({ id }));
      setLoading(false);

      if (editProduct.fulfilled.match(resultAction)) {
        const product = resultAction.payload;
        setFormData({
          name: product.name || "",
          price: product.price || "",
          quantity: product.quantity || "",
          category: product.category || "",
          description: product.description || "",
        });
      } else if (editProduct.rejected.match(resultAction)) {
        toast.error(resultAction.payload as string);
      }
    } catch (error) {
      toast.error("Failed to fetch product data");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) {
      toast.error("Product ID is missing");
      return;
    }
    const convertedData = {
      ...formData,
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity, 10),
    };
    try {
      setLoading(true);
      const resultAction = await dispatch(updateProduct({ id, ...convertedData }));
      if (updateProduct.fulfilled.match(resultAction)) {
        toast.success("Product updated successfully");
        setIsOpen(false)
      } else if (updateProduct.rejected.match(resultAction)) {
        toast.error(resultAction.payload as string);
      }
    } catch (error) {
      toast.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };
  
  return {
    handleEdit,
    isLoading,
    toggleModal,
    isOpen,
    handleChange,
    formData,
    FaSpinner,
    handleGetProductData,
  };
};

export default useEditProduct;
