"use client"
import axios from "axios";
import { ChangeEvent, useState } from "react"
import toast from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";


const useAddProductForm = () => {
    const [isOpen,setIsOpen]=useState(false)
    const toggleModal=()=>setIsOpen(!isOpen)

    const [formData, setFormData] = useState({
      name: '',
      price: '',
      quantity:'',
      category: '',
      description: ''
    });
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

  
const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const convertedData = {
        ...formData,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity, 10) 
      };
      try {
        await axios.post("/api/product/addproduct", {
          formData:convertedData
        });
        toast.success("Successfully Added");
        setIsOpen(false)
        setFormData({
          name: '',
          price: '',
          quantity:'',
          category: '',
          description: ''
        })
      } catch (error: any) {
        console.log(error);
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
    handleSubmit
  }
}

export default useAddProductForm