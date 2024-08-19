import { svgIcon } from "@/constants/svgIcon";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";
import { CiShop } from "react-icons/ci";


const useNav = () => {
  const {
    dashboard,
    dashboardPurple,
    analyst,
    analystPurple,
    customer,
    customerPurple,
    doc,
    docPurple,
    help,
    logout,
    notification,
    order,
    orderPurple,
    setting,
    logo,
  } = svgIcon;
   
  const [isOpen,setIsOpen]=useState(false)

  const openDropDown=()=>setIsOpen(!isOpen)

  const pathname = usePathname();
  const isActive = (href: string) => {
    if(pathname==href){
        return true
    }
    return false;
  };
  return {
    dashboard,
    dashboardPurple,
    analyst,
    analystPurple,
    customer,
    customerPurple,
    doc,
    docPurple,
    help,
    logout,
    notification,
    order,
    orderPurple,
    setting,
    logo,
    isActive,
    openDropDown,
    isOpen,
    IoMdArrowDropdown,
    MdOutlineAdd,
    CiShop
  };
};

export default useNav;
