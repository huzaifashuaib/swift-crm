import { useAppSelector } from "@/redux/store";

const useSubTotal = () => {
  const cartProduct = useAppSelector((state) => state.product.cart);
  const totalBill = cartProduct.reduce((acc, currentValue) => {
    const quantity = currentValue.quantity;
    const price = currentValue.price;
    const totalPrice = acc + quantity * price;
    return totalPrice;
  }, 0);

  return {
    totalBill
  };
};

export default useSubTotal;
