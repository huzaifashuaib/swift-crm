import { AnalysticDataType } from "@/types/types";
import { svgIcon } from "./svgIcon";

const { customer1,customer2,customer3,customer4 } = svgIcon;

export const AnalysticsCustomerData:AnalysticDataType[]=[{
    customerImage:customer1,
    customerName:"Jacob Swanson",
    customerDetail:"United States",
    customerPrice:"999.00",
},
{
    customerImage:customer2,
    customerName:"Amelia Johnson",
    customerDetail:"Canada",
    customerPrice:"1999.00",
},
{
    customerImage:customer3,
    customerName:"Eric Slater",
    customerDetail:"France",
    customerPrice:"2000.00",
},
{
    customerImage:customer4,
    customerName:"Aaron Chadwick",
    customerDetail:"United States",
    customerPrice:"399.00",
},
]