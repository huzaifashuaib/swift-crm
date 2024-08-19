"use client"
import { useEffect, useState } from 'react'


const useProductTable = () => {
    const [products, setProducts] = useState([]);
    const [loading,setloading]=useState(false)

    const fetchProducts = async () => {
      try {
        setloading(true)
        const response = await fetch("/api/product/getAllProduct");
        const data = await response.json();
        setProducts(data);
        setloading(false)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    
    useEffect(() => {
      fetchProducts();
  }, []);
  
  return {
   products,
   fetchProducts,
   loading,
  }
}

export default useProductTable