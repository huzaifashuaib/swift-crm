"use client";
import { addProduct } from "@/redux/slices/productSlice";
import { useAppDispatch } from "@/redux/store";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { CloudinaryUploadWidgetResults } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { IoMdAdd } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const useAddProductForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
    description: "",
    publicId: "",
    imgUrl: "",
    purchasePrice: "",
  });

  const handleUpload = (result: CloudinaryUploadWidgetResults) => {
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const convertedData = {
      ...formData,
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity, 10),
      purchasePrice: parseInt(formData.purchasePrice, 10),
    };
    try {
      setLoading(true);
      const resultAction = await dispatch(addProduct(convertedData));
      setLoading(false);
      if (addProduct.rejected.match(resultAction)) {
        const errorMessage = resultAction.payload as string;
        toast.error(errorMessage);
      } else {
        toast.success("Successfully Product Added 📦");
        setIsOpen(false);
        setFormData({
          name: "",
          price: "",
          quantity: "",
          category: "",
          description: "",
          publicId: "",
          imgUrl: "",
          purchasePrice: "",
        });
      }
    } catch (error: any) {
      toast.error(error?.response?.data);
    }
  };
  return {
    isOpen,
    toggleModal,
    IoMdAdd,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    isLoading,
    FaSpinner,
    handleUpload,
    CldUploadButton,
    FaPlus,
  };
};

export default useAddProductForm;
