"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import useNav from "./useNav";

const NavLink = () => {
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
    isActive,
    openDropDown,
    isOpen,
    IoMdArrowDropdown,
    MdOutlineAdd,
    CiShop
  } = useNav();

  return (
    <>
      <div className="gernal-links flex flex-col gap-4">
        <div
          className={`px-4 py-2 ${
            isActive("/") && "bg-activeLink rounded-[4px]"
          } hover:bg-activeLink hover:rounded-[4px] hover:text-btnColor`}
        >
          <Link href={"/"} className={`flex items-center gap-2`}>
            <Image src={isActive("/") ? dashboardPurple : dashboard} alt="" />
            <h2 className={`text-base ${isActive("/") && "text-btnColor"}`}>
              Dashboard
            </h2>
          </Link>
        </div>

        <div
          className={`px-4 py-2 ${
            isOpen && "bg-activeLink rounded-[4px]"
          } hover:bg-activeLink hover:rounded-[4px] hover:text-btnColor`}
          onClick={openDropDown}
        >
          <Link href={""} className={`flex items-center gap-2`}>
            <Image src={isOpen ? orderPurple : order} alt="" />
            <h2
              className={`text-base ${
                isOpen && "text-btnColor"
              } flex items-center gap-2`}
            >
              Ecommerce
              <div>
                <IoMdArrowDropdown />
              </div>
            </h2>
          </Link>
        </div>

        <div className={` ${isOpen ? "block" : "hidden"}`}>
          <div
            className={`ml-8 px-4 py-2 mb-2 ${
              isActive("/ecommerce/shop") && "bg-activeLink rounded-[4px]"
            } hover:bg-activeLink hover:rounded-[4px] hover:text-btnColor`}
          >
            <Link
              href={"/ecommerce/shop"}
              className={`flex items-center gap-2`}
            >
                
                <div className={`${isActive("/ecommerce/shop") ? "text-btnColor" : "text-black"}`}><CiShop /></div>
               
              <h2
                className={`text-base ${
                  isActive("/ecommerce/shop") && "text-btnColor"
                }`}
              >
                Store
              </h2>
            </Link>
          </div>

          <div
            className={`ml-8 px-4 py-2 ${
              isActive("/ecommerce/products") && "bg-activeLink rounded-[4px]"
            } hover:bg-activeLink hover:rounded-[4px] hover:text-btnColor`}
          >
            <Link
              href={"/ecommerce/products"}
              className={`flex items-center gap-2`}
            >
              <div className={`${isActive("/ecommerce/products") ? "text-btnColor" : "text-black"}`}><MdOutlineAdd /></div>
              <h2
                className={`text-base ${
                  isActive("/ecommerce/products") && "text-btnColor"
                }`}
              >
                Products
              </h2>
            </Link>
          </div>
        </div>

        <div
          className={`px-4 py-2 ${
            isActive("/notify") && "bg-activeLink rounded-[4px]"
          }`}
        >
          <Link href={""} className={`flex items-center gap-2 `}>
            <Image src={notification} alt="" />
            <h2
              className={`text-base ${isActive("/notify") && "text-btnColor"}`}
            >
              Notifications
            </h2>
          </Link>
        </div>
        <div
          className={`px-4 py-2 ${
            isActive("/customers") && "bg-activeLink rounded-[4px]"
          } hover:bg-activeLink hover:rounded-[4px] hover:text-btnColor`}
        >
          <Link href={"/customers"} className={`flex items-center gap-2`}>
            <Image
              src={isActive("/customers") ? customerPurple : customer}
              alt=""
            />
            <h2
              className={`text-base ${
                isActive("/customers") && "text-btnColor"
              }`}
            >
              Customers
            </h2>
          </Link>
        </div>

        <div
          className={`px-4 py-2 ${
            isActive("/orders") && "bg-activeLink rounded-[4px]"
          } hover:bg-activeLink hover:rounded-[4px] hover:text-btnColor`}
        >
          <Link href={"/orders"} className={`flex items-center gap-2 `}>
            <Image src={isActive("/orders") ? orderPurple : order} alt="" />
            <h2
              className={`text-base ${isActive("/orders") && "text-btnColor"}`}
            >
              Order Overview
            </h2>
          </Link>
        </div>

        <div
          className={`px-4 py-2 ${
            isActive("/analytics") && "bg-activeLink rounded-[4px]"
          } hover:bg-activeLink hover:rounded-[4px] hover:text-btnColor`}
        >
          <Link href={"/analytics"} className={`flex items-center gap-2`}>
            <Image
              src={isActive("/analytics") ? analystPurple : analyst}
              alt=""
            />
            <h2
              className={`text-base ${
                isActive("/analytics") && "text-btnColor"
              }`}
            >
              Analytics
            </h2>
          </Link>
        </div>

        <div
          className={`px-4 py-2 ${
            isActive("/documents") && "bg-activeLink rounded-[4px]"
          } hover:bg-activeLink hover:rounded-[4px] hover:text-btnColor`}
        >
          <Link
            href={"/documents"}
            className={`flex items-center gap-2 ${isActive("/documents")}`}
          >
            <Image src={isActive("/documents") ? docPurple : doc} alt="" />
            <h2
              className={`text-base ${
                isActive("/documents") && "text-btnColor"
              }`}
            >
              Documents
            </h2>
          </Link>
        </div>
      </div>

      <div className="support-links">
        <p className=" text-textMain font-bold text-xs">SUPPORT</p>
        <div className="gernal-links flex flex-col gap-4">
          <div className="mx-4 my-2">
            <li className={`flex items-center gap-2`}>
              <Image src={help} alt="" />
              <h2 className=" text-base">Help</h2>
            </li>
          </div>

          <div
            className={`px-4 py-2 ${
              isActive("/setting/myProfile") && "bg-activeLink rounded-[4px] "
            } hover:bg-activeLink hover:rounded-[4px] hover:text-btnColor`}
          >
            <Link
              href={"/setting/myProfile"}
              className={`flex items-center gap-2 ${isActive(
                "/setting/myProfile"
              )}`}
            >
              <Image src={setting} alt="" />
              <h2
                className={`text-base ${
                  isActive("/setting/myProfile") && "text-btnColor"
                }`}
              >
                Settings
              </h2>
            </Link>
          </div>
        </div>
      </div>

      <div className="accountstatus">
        <div className="px-4 py-2 hover:bg-activeLink hover:rounded-[4px] hover:text-btnColor">
          <li
            className="flex items-center gap-2 cursor-pointer "
            onClick={() => signOut()}
          >
            <Image src={logout} alt="" />
            <h2 className=" text-base">Log Out</h2>
          </li>
        </div>
      </div>
    </>
  );
};

export default NavLink;
