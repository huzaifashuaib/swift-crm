import CartBtn from "./cartBtn/CartBtn";

const ShopHeader = () => {
  return (
    <div className="flex items-center justify-between my-3">
      <div>
        <h1 className="text-xl text-btnColor font-semibold">
          <span className="text-black">swift</span>Commerce
        </h1>
      </div>

      <CartBtn />
    </div>
  );
};

export default ShopHeader;
