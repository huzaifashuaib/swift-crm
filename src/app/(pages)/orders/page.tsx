
import Header from '@/(components)/header/Header'
import BestSellingProduct from '@/(components)/orders/bestSellingProduct/BestSellingProduct'
import SalesStatistics from '@/(components)/orders/salesStatistic/SaleStatistics'
import React from 'react'

const Orders = () => {
  return (
    <div>
      <Header pageName='Order Overview'  />

      <div>
        <div>
          <SalesStatistics />
        </div>
        <div className='mt-5'>
          <BestSellingProduct />
        </div>
      </div>
    </div>
  )
}

export default Orders