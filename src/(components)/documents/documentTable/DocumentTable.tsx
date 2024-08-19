import Image from "next/image";
import { svgIcon } from "@/constants/svgIcon";
import CustomBtn from "../../customBtn/CustomBtn";
import StatusBtn from "./StatusBtn/StatusBtn";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const DocumentTable = () => {
  const { pdf, docCustomerIcon } = svgIcon;
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right border-separate text-cardMainHead border-spacing-y-[9.96px]">
        <thead className="text-sm font-semibold text-cardMainHead bg-tableHeadColor">
          <tr>
            <th
              scope="col"
              className="p-4 rounded-tl-[4.15px] rounded-bl-[4.15px]"
            >
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
              <div className="my-[10.79px]">Document Name</div>
            </th>
            <th scope="col">
              <div className="my-[10.79px]">Type</div>
            </th>
            <th scope="col">
              <div className="my-[10.79px]">Author</div>
            </th>
            <th scope="col">
              <div className="my-[10.79px]">Version</div>
            </th>
            <th scope="col">
              <div className="my-[10.79px]">Status</div>
            </th>
            <th scope="col" className="rounded-tr-[4.15px] rounded-br-[4.15px]">
              <div className="my-[10.79px]">Actions</div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4">
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
            <td>
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <div>
                  <Image src={pdf} alt="" />
                </div>
                <div>
                  <div className="text-cardMainHead text-xs font-medium mb-[3.32px]">
                    Product Requirements
                  </div>
                  <div className="text-textMain text-[10px] font-medium">
                    Uploaded 29 Jul 2023
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                PDF
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium">
                <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                  <Image src={docCustomerIcon} alt="" />
                  <div className="text-textMain font-medium">Earl Grayson</div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                1
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium flex">
                <StatusBtn text="Archive" />
              </div>
            </td>

            <td>
              <div className="my-[6.64px] flex items-center gap-[13.28px]">
                <div>
                  <CustomBtn text="View" />
                </div>
                <div>
                  <CustomBtn text="Edit" />
                </div>
              </div>
            </td>
          </tr>

          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4">
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
            <td>
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <div>
                  <Image src={pdf} alt="" />
                </div>
                <div>
                  <div className="text-cardMainHead text-xs font-medium mb-[3.32px]">
                    Product Requirements
                  </div>
                  <div className="text-textMain text-[10px] font-medium">
                    Uploaded 29 Jul 2023
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                PDF
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium">
                <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                  <Image src={docCustomerIcon} alt="" />
                  <div className="text-textMain font-medium">Earl Grayson</div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                1
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium flex">
                <StatusBtn text="Archive" />
              </div>
            </td>

            <td>
              <div className="my-[6.64px] flex items-center gap-[13.28px]">
                <div>
                  <CustomBtn text="View" />
                </div>
                <div>
                  <CustomBtn text="Edit" />
                </div>
              </div>
            </td>
          </tr>

          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4">
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
            <td>
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <div>
                  <Image src={pdf} alt="" />
                </div>
                <div>
                  <div className="text-cardMainHead text-xs font-medium mb-[3.32px]">
                    Product Requirements
                  </div>
                  <div className="text-textMain text-[10px] font-medium">
                    Uploaded 29 Jul 2023
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                PDF
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium">
                <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                  <Image src={docCustomerIcon} alt="" />
                  <div className="text-textMain font-medium">Earl Grayson</div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                1
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium flex">
                <StatusBtn text="Archive" />
              </div>
            </td>

            <td>
              <div className="my-[6.64px] flex items-center gap-[13.28px]">
                <div>
                  <CustomBtn text="View" />
                </div>
                <div>
                  <CustomBtn text="Edit" />
                </div>
              </div>
            </td>
          </tr>

          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4">
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
            <td>
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <div>
                  <Image src={pdf} alt="" />
                </div>
                <div>
                  <div className="text-cardMainHead text-xs font-medium mb-[3.32px]">
                    Product Requirements
                  </div>
                  <div className="text-textMain text-[10px] font-medium">
                    Uploaded 29 Jul 2023
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                PDF
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium">
                <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                  <Image src={docCustomerIcon} alt="" />
                  <div className="text-textMain font-medium">Earl Grayson</div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                1
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium flex">
                <StatusBtn text="Archive" />
              </div>
            </td>

            <td>
              <div className="my-[6.64px] flex items-center gap-[13.28px]">
                <div>
                  <CustomBtn text="View" />
                </div>
                <div>
                  <CustomBtn text="Edit" />
                </div>
              </div>
            </td>
          </tr>

          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4">
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
            <td>
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <div>
                  <Image src={pdf} alt="" />
                </div>
                <div>
                  <div className="text-cardMainHead text-xs font-medium mb-[3.32px]">
                    Product Requirements
                  </div>
                  <div className="text-textMain text-[10px] font-medium">
                    Uploaded 29 Jul 2023
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                PDF
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium">
                <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                  <Image src={docCustomerIcon} alt="" />
                  <div className="text-textMain font-medium">Earl Grayson</div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                1
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium flex">
                <StatusBtn text="Archive" />
              </div>
            </td>

            <td>
              <div className="my-[6.64px] flex items-center gap-[13.28px]">
                <div>
                  <CustomBtn text="View" />
                </div>
                <div>
                  <CustomBtn text="Edit" />
                </div>
              </div>
            </td>
          </tr>

          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4">
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
            <td>
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <div>
                  <Image src={pdf} alt="" />
                </div>
                <div>
                  <div className="text-cardMainHead text-xs font-medium mb-[3.32px]">
                    Product Requirements
                  </div>
                  <div className="text-textMain text-[10px] font-medium">
                    Uploaded 29 Jul 2023
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                PDF
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium">
                <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                  <Image src={docCustomerIcon} alt="" />
                  <div className="text-textMain font-medium">Earl Grayson</div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                1
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium flex">
                <StatusBtn text="Archive" />
              </div>
            </td>

            <td>
              <div className="my-[6.64px] flex items-center gap-[13.28px]">
                <div>
                  <CustomBtn text="View" />
                </div>
                <div>
                  <CustomBtn text="Edit" />
                </div>
              </div>
            </td>
          </tr>

          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4">
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
            <td>
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <div>
                  <Image src={pdf} alt="" />
                </div>
                <div>
                  <div className="text-cardMainHead text-xs font-medium mb-[3.32px]">
                    Product Requirements
                  </div>
                  <div className="text-textMain text-[10px] font-medium">
                    Uploaded 29 Jul 2023
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                PDF
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium">
                <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                  <Image src={docCustomerIcon} alt="" />
                  <div className="text-textMain font-medium">Earl Grayson</div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                1
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium flex">
                <StatusBtn text="Archive" />
              </div>
            </td>

            <td>
              <div className="my-[6.64px] flex items-center gap-[13.28px]">
                <div>
                  <CustomBtn text="View" />
                </div>
                <div>
                  <CustomBtn text="Edit" />
                </div>
              </div>
            </td>
          </tr>

          <tr className="bg-white hover:bg-gray-50">
            <td className="w-4 p-4">
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
            <td>
              <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                <div>
                  <Image src={pdf} alt="" />
                </div>
                <div>
                  <div className="text-cardMainHead text-xs font-medium mb-[3.32px]">
                    Product Requirements
                  </div>
                  <div className="text-textMain text-[10px] font-medium">
                    Uploaded 29 Jul 2023
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                PDF
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium">
                <div className=" flex items-center gap-[6.64px] my-[6.64px]">
                  <Image src={docCustomerIcon} alt="" />
                  <div className="text-textMain font-medium">Earl Grayson</div>
                </div>
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium text-xs">
                1
              </div>
            </td>
            <td>
              <div className="my-[6.64px] text-textMain font-medium flex">
                <StatusBtn text="Archive" />
              </div>
            </td>

            <td>
              <div className="my-[6.64px] flex items-center gap-[13.28px]">
                <div>
                  <CustomBtn text="View" />
                </div>
                <div>
                  <CustomBtn text="Edit" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between items-center mb-[9.96px]">
        <div className="flex items-center space-x-[9.96px]">
          <label
            htmlFor="entries-per-page"
            className="text-[12.45px] font-semibold text-cardMainHead"
          >
            Showing
          </label>
          <select
            id="entries-per-page"
            className="px-[4.98px] py-[9.96px] text-sm border-none focus:border-none rounded-[3.32px] bg-btnColor text-white"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <span className="text-[12.45px] font-semibold text-cardMainHead">
            of 10,678 entries
          </span>
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
    </div>
  );
};

export default DocumentTable;
