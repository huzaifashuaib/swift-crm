import ShopHeader from "./shopHeader/ShopHeader"
import ShowProducts from "./showProducts/ShowProducts"

const EcommerceStore = () => {
  return (
    <div>
        <div>
           <ShopHeader />
        </div>

        <div>
            <ShowProducts />
        </div>
    </div>
  )
}

export default EcommerceStore