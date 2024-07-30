import FormRegister from "@/(components)/SignupForm/RegisterForm";
import React from "react";
import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";

const SignUpPage = () => {
  const { logo } = svgIcon;
  return (
    <>
      <div className=" bg-backgroundImg bg-no-repeat bg-cover flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center items-center my-5">
            <Image src={logo} alt="" width={140} />
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
          <FormRegister />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
