import FormRegister from "@/(components)/SignupForm/RegisterForm";
import React from "react";

const SignUpPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
          <FormRegister />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
