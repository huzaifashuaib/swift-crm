const CustomerStatus = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-cardMainHead text-base font-semibold">New Customers</h1>
        </div>
        <div>1,2,3</div>
      </div> 
      <div className="border-b border-gray-200 my-3"></div>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className=" text-gray-700 uppercas bg-tableHeadColor rounded-[5px]">
              <tr className="p-2">
                <th scope="col" className="text-sm font-semibold line leading-5 p-2 text-cardMainHead">
                  Date
                </th>
                <th scope="col" className="text-sm font-semibold line leading-5 p-2 text-cardMainHead">
                  Customer
                </th>
                <th scope="col" className="text-sm font-semibold line leading-5 p-2 text-cardMainHead">
                  Status
                </th>
                <th scope="col" className="text-sm font-semibold line leading-5 p-2 text-cardMainHead">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td
                  scope="row"
                  className="px-6 py-4  text-gray-900 whitespace-nowrap"
                >
                 31 Jul 2023
                </td>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="bg-white">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Microsoft Surface Pro
                </td>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="bg-white ">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  Magic Mouse 2
                </td>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerStatus;
