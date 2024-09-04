import { completeOrder, getOrders, setOrderdata } from "@/redux/slices/orderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ORDER_FORMDATA } from "@/types/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useOrderTable = () => {
    const [loading, setLoading] = useState(false);
    const [btnLoading, setBtnLoading] = useState<string | null | undefined>("");
    const dispatch = useAppDispatch(); 
    const [orders, setOrders] = useState<ORDER_FORMDATA[]>([]);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const resultAction = await dispatch(getOrders());
            
            if (getOrders.fulfilled.match(resultAction)) {
                dispatch(setOrderdata(resultAction.payload));
                setOrders(resultAction.payload || []);
                toast.success("Products successfully fetched");
            } else if (getOrders.rejected.match(resultAction)) {
                const errorMessage = resultAction.payload as string;
                toast.error(errorMessage);
            }
        } catch (error) {
            console.error("Failed to fetch Orders:", error);
            toast.error("Failed to fetch Orders");
        } finally {
            setLoading(false);
        }
    }

    const handleOrder = async (id: string | undefined) => {
        if (!id) return;
        
        setBtnLoading(id);
        try {
            const resultAction = await dispatch(completeOrder({ id }));
            
            if (completeOrder.fulfilled.match(resultAction)) {
                toast.success("Order Delivered");
                setTimeout(() => {
                    fetchOrders(); 
                    setBtnLoading(null);
                }, 1000);
            } else if (completeOrder.rejected.match(resultAction)) {
                const errorMessage = resultAction.payload as string;
                toast.error(errorMessage);
            }
        } catch (error) {
            console.error("Failed to send Order ID:", error);
            toast.error("Failed to send Order ID");
        } finally {
            setBtnLoading(null); 
        }
    }

    useEffect(() => {
        fetchOrders();
    }, []); 

    return {
        orders,
        fetchOrders,
        loading,
        handleOrder,
        btnLoading,
    };
}

export default useOrderTable;
