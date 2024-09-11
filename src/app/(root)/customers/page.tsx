import CustomerCard from "@/(components)/customers/customerCard/CustomerCard";
import CustomerDemographic from "@/(components)/customers/customerDemographic/CustomerDemographic";
import CustomerStatusTable from "@/(components)/customers/customerStatusTable/CustomerStatusTable";
import CustomerUsage from "@/(components)/customers/customerUsage/CustomerUsage";
import Header from "@/(components)/header/Header";
import { svgIcon } from "@/constants/svgIcon";

export const dynamic = 'force-dynamic';


const Customers = () => {
  const { totalMem, newMem, nonMem, member } = svgIcon;
  return (
    <div>
      <Header pageName="Customers" />
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[19.92px] md:gap-6 mt-[28.87px] md:mt-[62px]">
          <CustomerCard
            svgIcon={totalMem}
            text={"Total Customers"}
            total="10,678"
            color="gradient-to-t from-cardTopColor to-cardBottomColor"
            bgClr="cardBgColor"
            border={false}
          />
          <CustomerCard
            svgIcon={newMem}
            text={"New Customers"}
            total="1,000"
            border={true}
          />
          <CustomerCard
            svgIcon={member}
            text={"Total Members"}
            total="8,846"
            border={true}
          />
          <CustomerCard
            svgIcon={nonMem}
            text={"Non Members"}
            total="832"
            border={true}
          />
        </div>
      </div>

      <div className="px-4 py-5 bg-white rounded-[10.5px] border-custom border-custom-border-color mt-[22px]">
        <CustomerUsage />
      </div>

      <div className="px-[13.28px] md:px-4 py-5 bg-white rounded-[10.5px] border-custom border-custom-border-color mt-[23px]">
        <CustomerDemographic />
      </div>

      <div className="mt-[23px]">
        <CustomerStatusTable />
      </div>
    </div>
  );
};

export default Customers;
