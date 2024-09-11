"use client"
import { addToCart, getAllProduct } from "@/redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { PRODUCT } from "@/types/types";
import { useEffect, useState } from "react";
import { FaSpinner } from 'react-icons/fa';
import toast from "react-hot-toast";

const useProductCard = () => {
    const allProducts=useAppSelector((state)=>state.product)
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch(); 
    const [products, setProducts] = useState<PRODUCT[]>([]);

    const handleAddToCart = (productId: string) => {
        dispatch(addToCart(productId));
        const product=allProducts.product.find((product)=>product.id === productId)
        if(product){
            if(product.quantity> 0) {
                toast.success("Product Added in Cart!");
            }
            else{
                toast.error("Product Out of Stock")
            }
        }
      }

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const resultAction = await dispatch(getAllProduct());
            setLoading(false);
            if (getAllProduct.fulfilled.match(resultAction)) {
                setProducts(resultAction.payload || []);
            } else if (getAllProduct.rejected.match(resultAction)) {
                const errorMessage = resultAction.payload as string;
                toast.error(errorMessage);
            }
        } catch (error) {
            console.error("Failed to fetch products:", error);
            toast.error("Failed to fetch products");
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [dispatch]);

    return {
        products,
        fetchProducts,
        loading,
        FaSpinner,
        handleAddToCart
    };
};

export default useProductCard;
