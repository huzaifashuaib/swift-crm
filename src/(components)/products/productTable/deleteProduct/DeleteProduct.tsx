"use client"

import CustomBtn from "@/(components)/customBtn/CustomBtn";
import useDeleteProduct from "./useDeleteProduct";

const DeleteProduct = ({ id }: { id: string | undefined }) => {
    const { handleDelete, loading,FaSpinner } = useDeleteProduct(id);

    return (
        <button onClick={handleDelete} disabled={loading}>
            {loading ? <FaSpinner className=" animate-spin" /> : <CustomBtn text="Delete" />}
        </button>
    );
};

export default DeleteProduct;
