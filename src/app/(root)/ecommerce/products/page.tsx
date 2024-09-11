
import Header from "@/(components)/header/Header";
import AddProductHeader from "@/(components)/products/addProduct/addProductHeader/AddProductHeader";
import ProductTable from "@/(components)/products/productTable/ProductTable";
import React from "react";
export const dynamic = 'force-dynamic';


const page = () => {
  return (
    <div>
      <div>
        <Header pageName="Stock Info" />
      </div>

      <div>
        <AddProductHeader />
      </div>

      <div>
        <ProductTable />
      </div>
    </div>
  );
};

export default page;
