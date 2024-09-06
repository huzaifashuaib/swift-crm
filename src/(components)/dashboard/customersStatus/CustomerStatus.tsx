import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CustomerStatus = () => {
  const { customerImg } = svgIcon;
  return (
    <div className="bg-[#FFF] py-6 px-4 border-custom border-custom-border-color rounded-[10.5px] h-full">
      <div className="md:flex justify-between items-center">
        <div>
          <h1 className="text-cardMainHead text-base font-semibold">
            New Customers
          </h1>
        </div>
        
        <div>
          <div className="flex items-center justify-center my-4">
            <button className="px-[9.19px] py-[9.30px] text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-100">
              <MdKeyboardArrowLeft />
            </button>
            
            <button className="px-[13px] py-[9.90px] text-[9.96px] border border-btnColor leading-[14.94px] bg-btnColor text-white hover:bg-activeLink hover:text-black">
              1
            </button>

            <button className="px-[13px] py-[9.90px] text-[9.96px] border border-gray-200 leading-[14.94px] bg-white text-black hover:bg-activeLink hover:text-black hover:border-btnColor">
              2
            </button>
            <button className="px-[13px] py-[9.90px] text-[9.96px] border border-gray-200 leading-[14.94px] bg-white text-black hover:bg-activeLink hover:text-black hover:border-btnColor">
              3
            </button>
            <button className="px-[13px] py-[9.90px] text-[9.96px] border border-gray-200 leading-[14.94px] bg-white text-black hover:bg-activeLink hover:text-black hover:border-btnColor">
              4
            </button>
            <button className="px-[13px] py-[9.90px] text-[9.96px] border border-gray-200 leading-[14.94px] bg-white text-black hover:bg-activeLink hover:text-black hover:border-btnColor">
              5
            </button>

            <button className="px-[9.19px] py-[9.30px] text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-100">
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>

      </div>
      <div className="border-b border-gray-200 my-3"></div>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-left text-gray-500">
            <thead className=" text-gray-700 uppercas bg-tableHeadColor rounded-[5px]">
              <tr>
                <th scope="col">
                  <div className="text-sm font-semibold line leading-5 p-2 text-cardMainHead">
                    Date
                  </div>
                </th>
                <th scope="col">
                  <div className="text-sm font-semibold line leading-5 p-2 text-cardMainHead">
                    Customer
                  </div>
                </th>
                <th scope="col">
                  <div className="text-sm font-semibold line leading-5 p-2 text-cardMainHead">
                    Status
                  </div>
                </th>
                <th scope="col">
                  <div className="text-sm font-semibold line leading-5 p-2 text-cardMainHead">
                    Total
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white">
                <td scope="row" className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    31 Jul 2023
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2 ">
                    <div>
                      <Image src={customerImg} alt="" />
                    </div>
                    <h1 className="text-textMain text-sm font-medium">
                      Jacob Swanson
                    </h1>
                  </div>
                </td>
                <td className="p-3">
                  <span className="rounded-[15.75px] bg-success text-xs font-bold text-[#62912C] px-[8px] py-[3px]">
                    Success
                  </span>
                </td>
                <td className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    $999.00{" "}
                  </span>
                </td>
              </tr>


              <tr className="bg-white">
                <td scope="row" className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    31 Jul 2023
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2 ">
                    <div>
                      <Image src={customerImg} alt="" />
                    </div>
                    <h1 className="text-textMain text-sm font-medium">
                      Jacob Swanson
                    </h1>
                  </div>
                </td>
                <td className="p-3">
                  <span className="rounded-[15.75px] bg-success text-xs font-bold text-[#62912C] px-[8px] py-[3px]">
                    Success
                  </span>
                </td>
                <td className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    $999.00{" "}
                  </span>
                </td>
              </tr>


              <tr className="bg-white">
                <td scope="row" className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    31 Jul 2023
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2 ">
                    <div>
                      <Image src={customerImg} alt="" />
                    </div>
                    <h1 className="text-textMain text-sm font-medium">
                      Jacob Swanson
                    </h1>
                  </div>
                </td>
                <td className="p-3">
                  <span className="rounded-[15.75px] bg-success text-xs font-bold text-[#62912C] px-[8px] py-[3px]">
                    Success
                  </span>
                </td>
                <td className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    $999.00{" "}
                  </span>
                </td>
              </tr>


              <tr className="bg-white">
                <td scope="row" className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    31 Jul 2023
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2 ">
                    <div>
                      <Image src={customerImg} alt="" />
                    </div>
                    <h1 className="text-textMain text-sm font-medium">
                      Jacob Swanson
                    </h1>
                  </div>
                </td>
                <td className="p-3">
                  <span className="rounded-[15.75px] bg-success text-xs font-bold text-[#62912C] px-[8px] py-[3px]">
                    Success
                  </span>
                </td>
                <td className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    $999.00{" "}
                  </span>
                </td>
              </tr>



              <tr className="bg-white">
                <td scope="row" className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    31 Jul 2023
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2 ">
                    <div>
                      <Image src={customerImg} alt="" />
                    </div>
                    <h1 className="text-textMain text-sm font-medium">
                      Jacob Swanson
                    </h1>
                  </div>
                </td>
                <td className="p-3">
                  <span className="rounded-[15.75px] bg-success text-xs font-bold text-[#62912C] px-[8px] py-[3px]">
                    Success
                  </span>
                </td>
                <td className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    $999.00{" "}
                  </span>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerStatus;
