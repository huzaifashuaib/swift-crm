import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
const Nav = () => {
  const {
    dashboard,
    analyst,
    customer,
    doc,
    help,
    logout,
    notification,
    order,
    setting,
    logo,
  } = svgIcon;
  return (
    <div>
      <div className="logo">
        <Image src={logo} alt="" />
      </div>

      <div className="navlinks flex flex-col gap-4">
        <p className=" text-textMain font-bold text-xs">GENERAL</p>
        <div className="gernal-links flex flex-col gap-4">
          <div className="mx-4 my-2">
            <li className="flex items-center gap-2">
              <Image src={dashboard} alt="" />
              <h2 className=" text-base">Dashboard</h2>
            </li>
          </div>
          <div className="mx-4 my-2">
            <li className="flex items-center gap-2 ">
              <Image src={notification} alt="" />
              <h2 className=" text-base">Notifications</h2>
            </li>
          </div>
          <div className="mx-4 my-2">
            <li className="flex items-center gap-2 ">
              <Image src={customer} alt="" />
              <h2 className=" text-base">Customers</h2>
            </li>
          </div>

          <div className="mx-4 my-2">
            <li className="flex items-center gap-2 ">
              <Image src={order} alt="" />
              <h2 className=" text-base">Order Overview</h2>
            </li>
          </div>

          <div className="mx-4 my-2">
            <li className="flex items-center gap-2 ">
              <Image src={analyst} alt="" />
              <h2 className=" text-base">Analytics</h2>
            </li>
          </div>

          <div className="mx-4 my-2">
            <li className="flex items-center gap-2 ">
              <Image src={doc} alt="" />
              <h2 className=" text-base">Documents</h2>
            </li>
          </div>
        </div>

        <div className="support-links">
          <p className=" text-textMain font-bold text-xs">SUPPORT</p>
          <div className="gernal-links flex flex-col gap-4">
            <div className="mx-4 my-2">
              <li className="flex items-center gap-2">
                <Image src={help} alt="" />
                <h2 className=" text-base">Help</h2>
              </li>
            </div>
            <div className="mx-4 my-2">
              <li className="flex items-center gap-2">
                <Image src={setting} alt="" />
                <h2 className=" text-base">Settings</h2>
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="accountstatus">
        <div className="mx-4 my-2">
          <li className="flex items-center gap-2">
            <Image src={logout} alt="" />
            <h2 className=" text-base">Log Out</h2>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Nav;
