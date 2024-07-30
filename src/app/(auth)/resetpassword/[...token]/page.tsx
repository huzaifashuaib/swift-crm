import Image from 'next/image'
import React from 'react'
import { svgIcon } from '@/constants/svgIcon'
import RestFormPass from '@/(components)/RestPassword/RestFormPass'

const ResetPassword = ({params}:any) => {
    const token=params.token[0]
    const {logo}=svgIcon
  return (
    <div className="  bg-backgroundImg bg-cover bg-no-repeat flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className='flex justify-center items-center my-5'>
      <Image src={logo} alt="" width={140} />
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>
     <RestFormPass token={token} />
    </div>
  </div>
  )
}

export default ResetPassword