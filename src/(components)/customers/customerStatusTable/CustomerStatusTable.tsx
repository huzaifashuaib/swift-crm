import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
const CustomerStatusTable = () => {
  const { customerImg } = svgIcon;
  return (
    <div>
      <div className="relative overflow-x-auto  shadow-md sm:rounded-lg border-custom border-custom-border-color">
        <table className="w-full text-sm text-left rtl:text-right border-separate text-cardMainHead border-spacing-y-3">
          <thead className="text-sm font-semibold text-cardMainHead bg-gray-50">
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
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>


          <tbody className="">

            <tr className="bg-white hover:bg-gray-50 border border-gray-200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="flex items-center gap-2 px-6 py-4 text-cardMainHead whitespace-nowrap">
                  <Image src={customerImg} alt="" />
                  <div className="">Jacob Swanson</div>
              </td>
              <td className="px-6 py-4">jacobswanson@email.com</td>
              <td className="px-6 py-4">555-123-4567</td>
              <td className="px-6 py-4">Phoenix, USA</td>
              <td className="px-6 py-4">online</td>
            </tr>

            <tr className="bg-white hover:bg-gray-50 border-custom border-custom-border-color ">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="flex items-center gap-2 px-6 py-4 text-cardMainHead whitespace-nowrap">
                <Image src={customerImg} alt="" />
                <div>
                  <div className="">Jacob Swanson</div>
                </div>
              </td>
              <td className="px-6 py-4">jacobswanson@email.com</td>
              <td className="px-6 py-4">555-123-4567</td>
              <td className="px-6 py-4">Phoenix, USA</td>
              <td className="px-6 py-4">online</td>
            </tr>

            <tr className="bg-white hover:bg-gray-50 border-custom border-custom-border-color">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="flex items-center gap-2 px-6 py-4 text-cardMainHead whitespace-nowrap">
                <Image src={customerImg} alt="" />
                <div>
                  <div className="">Jacob Swanson</div>
                </div>
              </td>
              <td className="px-6 py-4">jacobswanson@email.com</td>
              <td className="px-6 py-4">555-123-4567</td>
              <td className="px-6 py-4">Phoenix, USA</td>
              <td className="px-6 py-4">online</td>
            </tr>

            <tr className="bg-white hover:bg-gray-50 border-custom border-custom-border-color">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="flex items-center gap-2 px-6 py-4 text-cardMainHead whitespace-nowrap">
                <Image src={customerImg} alt="" />
                <div>
                  <div className="">Jacob Swanson</div>
                </div>
              </td>
              <td className="px-6 py-4">jacobswanson@email.com</td>
              <td className="px-6 py-4">555-123-4567</td>
              <td className="px-6 py-4">Phoenix, USA</td>
              <td className="px-6 py-4">online</td>
            </tr>


          </tbody>


        </table>
      </div>
    </div>
  );
};

export default CustomerStatusTable;
