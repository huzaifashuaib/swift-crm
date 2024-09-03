"use client";
import { useAppDispatch } from "@/redux/store";
import { ChangeEvent, useState } from "react";
import { FaPlus, FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import { editProduct, updateProduct } from "@/redux/slices/productSlice";
import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";

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
    imgUrl: "",
    publicId: ""
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

  const handleUpload = (result: CloudinaryUploadWidgetResults) => {
    console.log("Upload Result:", result);
    const info = result?.info;
    if (
      typeof info === "object" &&
      info &&
      "secure_url" in info &&
      "public_id" in info
    ) {
      const url = info.secure_url as string;
      const public_id = info.public_id as string;

      setFormData((prevState) => ({
        ...prevState,
        imgUrl: url,
        publicId: public_id,
      }));
    } else {
      toast.error("Failed to retrieve the URL or public ID from Cloudinary.");
    }
  };

  const handleGetProductData = async () => {
    setLoading(true);
    if (!id) {
      toast.error("Product ID is missing");
      return;
    }
    try {
      const resultAction = await dispatch(editProduct({ id }));
      console.log("Fetched Product Data:", resultAction);
      setLoading(false);
      toggleModal();

      if (editProduct.fulfilled.match(resultAction)) {
        const product = resultAction.payload;
        setFormData({
          name: product.name || "",
          price: product.price || "",
          quantity: product.quantity || "",
          category: product.category || "",
          description: product.description || "",
          imgUrl: product.imgUrl || "",
          publicId: product.publicId || "",
        });
      } else if (editProduct.rejected.match(resultAction)) {
        toast.error(resultAction.payload as string);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
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
      console.log("Update Product Result:", resultAction);
      if (updateProduct.fulfilled.match(resultAction)) {
        toast.success("Product updated successfully");
        setIsOpen(false);
      } else if (updateProduct.rejected.match(resultAction)) {
        toast.error(resultAction.payload as string);
      }
    } catch (error) {
      console.error("Error updating product:", error);
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
    handleUpload,
    CldUploadButton,
    FaPlus
  };
};

export default useEditProduct;
