import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";

const CustomerStatus = () => {
  const { customerImg } = svgIcon;
  return (
    <div className="bg-[#FFF] py-6 px-4 border-custom border-custom-border-color rounded-[10.5px]">
      <div className="flex justify-between">
        <div>
          <h1 className="text-cardMainHead text-base font-semibold">
            New Customers
          </h1>
        </div>
        <div>1,2,3</div>
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
