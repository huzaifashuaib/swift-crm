"use client";
import { getProduct } from '@/redux/slices/productSlice';
import { useAppDispatch } from '@/redux/store';
import { PRODUCT } from '@/types/types';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useProductTable = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch(); 
    const [products, setProducts] = useState<PRODUCT[]>([]);

    const fetchProducts = async () => {
        setLoading(true);
        try {
         
            const resultAction = await dispatch(getProduct());
            setLoading(false);
            if (getProduct.fulfilled.match(resultAction)) {
                setProducts(resultAction.payload || []);
                toast.success("Products successfully fetched");
            } else if (getProduct.rejected.match(resultAction)) {
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
    };
};

export default useProductTable;
