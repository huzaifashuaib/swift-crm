import React from 'react'
import ProtectedRootLayout from './(root)/layout'
import DashBoard from './(root)/dashboard/page'

const Home = () => {
  return (
    <ProtectedRootLayout>
       <DashBoard />
     </ProtectedRootLayout>
       )
}

export default Home