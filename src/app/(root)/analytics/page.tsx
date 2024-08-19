import OverAllSales from '@/(components)/analytics/overallSale/OverAllSales'
import SourcePurchase from '@/(components)/analytics/purchaseSource/SourcePurchase'
import SaleHistory from '@/(components)/analytics/salesHistory/SaleHistory'
import SalesperCountry from '@/(components)/analytics/salesperCountry/SalesperCountry'
import SaleperWeek from '@/(components)/analytics/salesperWeeks/SaleperWeek'
import Vistors from '@/(components)/analytics/vistors/Vistors'
import Header from '@/(components)/header/Header'
import React from 'react'

const analytics = () => {
  return (
    <div>
      <div className='mb-[62px] mt-[19px]'>
      <Header pageName='Analytics' />
      </div>

      <div className='flex gap-6 mb-[23px] h-auto'>
        <div className="oversales w-[60%]">
          <OverAllSales />
        </div>
        <div className="vistors w-[40%] ">
         <Vistors />
        </div>
      </div>

      <div className='flex gap-[25px] mb-6 h-auto'>
        <div className="sourcePurchase w-[27%]">
          <SourcePurchase />
        </div>
        <div className="sourcePurchase w-[73%]">
          <SaleperWeek />
        </div>
      </div>

      <div className='flex gap-6 h-auto'>
        <div className="sourcePurchase w-[55%]">
        <SalesperCountry />
        </div>
        <div className="sourcePurchase w-[45%]">
          <SaleHistory />
        </div>
      </div>
    </div>
  )
}

export default analytics