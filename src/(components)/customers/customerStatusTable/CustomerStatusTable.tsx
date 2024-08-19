import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";

const CustomerStatusTable = () => {
  const { customerImg } = svgIcon;
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right border-separate text-cardMainHead border-spacing-y-5">
        <thead className="text-sm font-semibold text-cardMainHead">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col">
              <div className="my-[6.64px]">Customer Name</div>
            </th>
            <th scope="col">
              <div className="my-[6.64px]">Email</div>
            </th>
            <th scope="col">
              <div className="my-[6.64px]">Phone</div>
            </th>
            <th scope="col">
              <div className="my-[6.64px]">Address</div>
            </th>
            <th scope="col">
              <div className="my-[6.64px]">Status</div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4 border-l border-y-[1px] border-custom-border-color rounded-tl-[4.15px] rounded-bl-[4.15px]">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <Image src={customerImg} alt="" />
                <div className="text-textMain font-medium">Jacob Swanson</div>
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                jacobswanson@email.com
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                555-123-4567
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                Phoenix, USA
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color border-r rounded-tr-[4.15px] rounded-br-[4.15px]">
              <div className="my-[6.64px] text-textMain font-medium flex">
              
                  <div className=" bg-success rounded-[13.07px] py-[0.62px] px-[4.98px]">
                    <div className="text-[10px] leading-[15px] font-bold text-[#62912C]">
                     online
                    </div>
                  </div>
             
              </div>
            </td>
          </tr>

          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4 border-l border-y-[1px] border-custom-border-color rounded-tl-[4.15px] rounded-bl-[4.15px]">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <Image src={customerImg} alt="" />
                <div className="text-textMain font-medium">Jacob Swanson</div>
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                jacobswanson@email.com
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                555-123-4567
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                Phoenix, USA
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color border-r rounded-tr-[4.15px] rounded-br-[4.15px]">
              <div className="my-[6.64px] text-textMain font-medium flex">
              
                  <div className=" bg-success rounded-[13.07px] py-[0.62px] px-[4.98px]">
                    <div className="text-[10px] leading-[15px] font-bold text-[#62912C]">
                     online
                    </div>
                  </div>
             
              </div>
            </td>
          </tr>


          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4 border-l border-y-[1px] border-custom-border-color rounded-tl-[4.15px] rounded-bl-[4.15px]">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <Image src={customerImg} alt="" />
                <div className="text-textMain font-medium">Jacob Swanson</div>
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                jacobswanson@email.com
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                555-123-4567
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                Phoenix, USA
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color border-r rounded-tr-[4.15px] rounded-br-[4.15px]">
              <div className="my-[6.64px] text-textMain font-medium flex">
              
                  <div className=" bg-success rounded-[13.07px] py-[0.62px] px-[4.98px]">
                    <div className="text-[10px] leading-[15px] font-bold text-[#62912C]">
                     online
                    </div>
                  </div>
             
              </div>
            </td>
          </tr>



          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4 border-l border-y-[1px] border-custom-border-color rounded-tl-[4.15px] rounded-bl-[4.15px]">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <Image src={customerImg} alt="" />
                <div className="text-textMain font-medium">Jacob Swanson</div>
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                jacobswanson@email.com
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                555-123-4567
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                Phoenix, USA
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color border-r rounded-tr-[4.15px] rounded-br-[4.15px]">
              <div className="my-[6.64px] text-textMain font-medium flex">
              
                  <div className=" bg-success rounded-[13.07px] py-[0.62px] px-[4.98px]">
                    <div className="text-[10px] leading-[15px] font-bold text-[#62912C]">
                     online
                    </div>
                  </div>
             
              </div>
            </td>
          </tr>


          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4 border-l border-y-[1px] border-custom-border-color rounded-tl-[4.15px] rounded-bl-[4.15px]">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <Image src={customerImg} alt="" />
                <div className="text-textMain font-medium">Jacob Swanson</div>
              </div>
            </td>
            <td className="border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                jacobswanson@email.com
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                555-123-4567
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                Phoenix, USA
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color border-r rounded-tr-[4.15px] rounded-br-[4.15px]">
              <div className="my-[6.64px] text-textMain font-medium flex">
              
                  <div className=" bg-success rounded-[13.07px] py-[0.62px] px-[4.98px]">
                    <div className="text-[10px] leading-[15px] font-bold text-[#62912C]">
                     online
                    </div>
                  </div>
             
              </div>
            </td>
          </tr>


          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4 border-l border-y-[1px] border-custom-border-color rounded-tl-[4.15px] rounded-bl-[4.15px]">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-2" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <Image src={customerImg} alt="" />
                <div className="text-textMain font-medium">Jacob Swanson</div>
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                jacobswanson@email.com
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                555-123-4567
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color">
              <div className="my-[6.64px] text-textMain font-medium">
                Phoenix, USA
              </div>
            </td>
            <td className=" border-y-[1px] border-custom-border-color border-r rounded-tr-[4.15px] rounded-br-[4.15px]">
              <div className="my-[6.64px] text-textMain font-medium flex">
              
                  <div className=" bg-success rounded-[13.07px] py-[0.62px] px-[4.98px]">
                    <div className="text-[10px] leading-[15px] font-bold text-[#62912C]">
                     online
                    </div>
                  </div>
             
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomerStatusTable;
