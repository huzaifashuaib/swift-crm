import CustomBtn from "@/(components)/customBtn/CustomBtn";
import DocumentBtn from "@/(components)/documents/documentBtn/DocumentBtn";
import DocumentTable from "@/(components)/documents/documentTable/DocumentTable";
import NavDoc from "@/(components)/documents/NavDoc/NavDoc";
import Header from "@/(components)/header/Header";


import React from "react";
export const dynamic = 'force-dynamic';

const Documents = () => {
  return (
    <div>
      <div>
        <Header pageName="Documents" />
      </div>

      <div className="bg-white py-[19.92px] px-[13.28px] rounded-[8.72px] shadow-lg mt-[40.01px]">
        <div>
          <div className="docNav">
            <NavDoc />
          </div>
        </div>
        <div>
          <div className="docTable">
            <DocumentTable />
          </div>
        </div>
      </div>

      <div className="mt-[20.15px] md:mt-[56.85px]">
        <DocumentBtn />
      </div>

    </div>
  );
};

export default Documents;
