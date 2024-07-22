import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";

const BestSellingProduct = () => {
  const { bowelImg } = svgIcon;
  return (
    <div className="bg-[#FFF] py-6 px-4 border-custom border-custom-border-color rounded-[10.5px]">
      <div>
        <h1 className="text-cardMainHead text-base font-semibold">
          Best Selling Products
        </h1>
      </div>
      <div className="border-b border-gray-200 my-3"></div>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-left text-gray-500">
            <thead className=" text-gray-700 uppercas bg-tableHeadColor ">
              <tr className="rounded-[115px]">
                <th scope="col">
                  <div className="text-sm font-semibold line leading-5 p-2 text-cardMainHead m-2">
                    Product Name
                  </div>
                </th>
                <th scope="col">
                  <div className="text-sm font-semibold line leading-5 p-2 text-cardMainHead m-2">
                    Total Order
                  </div>
                </th>
                <th scope="col">
                  <div className="text-sm font-semibold line leading-5 p-2 text-cardMainHead m-2">
                    Status
                  </div>
                </th>
                <th scope="col">
                  <div className="text-sm font-semibold line leading-5 p-2 text-cardMainHead m-2">
                    Price
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="">
              <tr className="bg-white">
                <td scope="row" className="p-3">
                  <div className="flex items-center gap-2 ">
                    <div>
                      <Image src={bowelImg} alt="" width={32} />
                    </div>
                    <div>
                    <h2 className="text-sm font-medium text-cardHead">Ceramic Bowl</h2>
                    <span className="text-textMain text-sm font-normal-">
                    HomeGoods
                    </span>
                  </div>
                  </div>
                </td>
                <td className="p-3">
                  <div>
                    <h2 className="text-sm font-medium text-cardMainHead">200 pcs</h2>
                    <span className="text-textMain text-sm font-medium">
                      31 Jul 2023
                    </span>
                  </div>
                </td>
                <td className="p-3">
                  <span className="rounded-[15.75px] bg-success text-xs font-bold text-[#62912C] px-[8px] py-[3px]">
                    Available
                  </span>
                </td>
                <td className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    $29.00{" "}
                  </span>
                </td>
              </tr>

              <tr className="bg-white">
                <td scope="row" className="p-3">
                  <div className="flex items-center gap-2 ">
                    <div>
                      <Image src={bowelImg} alt="" width={32} />
                    </div>
                    <div>
                    <h2 className="text-sm font-medium text-cardHead">Ceramic Bowl</h2>
                    <span className="text-textMain text-sm font-normal-">
                    HomeGoods
                    </span>
                  </div>
                  </div>
                </td>
                <td className="p-3">
                  <div>
                    <h2 className="text-sm font-medium text-cardMainHead">200 pcs</h2>
                    <span className="text-textMain text-sm font-medium">
                      31 Jul 2023
                    </span>
                  </div>
                </td>
                <td className="p-3">
                  <span className="rounded-[15.75px] bg-success text-xs font-bold text-[#62912C] px-[8px] py-[3px]">
                    Available
                  </span>
                </td>
                <td className="p-3">
                  <span className="text-textMain text-sm font-medium">
                    $29.00{" "}
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

export default BestSellingProduct;
