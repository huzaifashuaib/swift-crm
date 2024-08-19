import ForgetForm from '@/(components)/forgetPassForm/ForgetForm'
import Image from 'next/image'
import React from 'react'
import { svgIcon } from '@/constants/svgIcon'

const page = () => {
  const {logo}=svgIcon
  return (
    <div className="  bg-backgroundImg bg-cover bg-no-repeat flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className='flex justify-center items-center my-5'>
          <Image src={logo} alt="" width={140} />
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Forget Password</h2>
          <ForgetForm />
        </div>
      </div>
  )
}

export default page