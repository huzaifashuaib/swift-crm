import { CiShoppingCart } from "react-icons/ci";

const CartBtn = ({text}:{text:string}) => {
  return (
    <div className="px-2 py-[5px] border border-btnColor rounded-[3.2px] bg-themeLight flex justify-between items-center hover:bg-btnColor text-btnColor hover:text-themeLight">
        <div className=" text-base font-semibold flex items-center gap-2">{text}
        <CiShoppingCart />
        </div>
    </div>
  )
}

export default CartBtn