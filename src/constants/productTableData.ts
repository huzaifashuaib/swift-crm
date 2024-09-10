import { ProductDataType } from "@/types/types";
import { svgIcon } from "./svgIcon";

const { cupImg, bowelImg, glassImg, plateImg } = svgIcon;

export const productData:ProductDataType[]=[{
    productImage:cupImg,
    productName:"Ceramic Mug",
    productSub:"Potterific",
    pcs:"184 pcs",
    date:"July 4, 2023",
    status:"Available",
    price:"59.00"
},
{
    productImage:bowelImg,
    productName:"Ceramic Bowl",
    productSub:"HomeGoods",
    pcs:"200 pcs",
    date:"July 2, 2023",
    status:"Available",
    price:"29.00"
},

{
    productImage:glassImg,
    productName:"Vase",
    productSub:"Flower Child",
    pcs:"155 pcs",
    date:"July 3, 2023",
    status:"Available",
    price:"99.00"
},

{
    productImage:plateImg,
    productName:"Wooden Bowl",
    productSub:"Wood Co.",
    pcs:"120 pcs",
    date:"July 5, 2023",
    status:"Available",
    price:"30.00"
},]

