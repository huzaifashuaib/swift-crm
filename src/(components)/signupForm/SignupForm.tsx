"use client";

import Input from "@/(components)/input/Input";
import useSignupForm from "./useSignupForm";

const SignupForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    loading,
    handleSubmitRegister,
    FaSpinner
  }=useSignupForm();
 

  return (
    <>
      <div>
        <Input
          type="text"
          disable={false}
          value={name}
          label="Name"
          onchange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
      </div>
      <div>
        <Input
          type="email"
          disable={false}
          value={email}
          label="Email"
          onchange={(e) => setEmail(e.target.value)}
           placeholder="Enter Your Email"
        />
      </div>
      <div>
        <Input
          type="password"
          disable={false}
          value={password}
          label="Password"
          onchange={(e) => setPassword(e.target.value)}
           placeholder="Enter Your Password"
        />
      </div>
      <button
        disabled={loading ? true :false}
        onClick={handleSubmitRegister}
        type="submit"
        className={`w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors ${loading?"cursor-no-drop":"cursor-pointer"} `}
      >
      <div className="flex justify-center items-center gap-1">
          {loading && <FaSpinner className="animate-spin mr-2" />}
          <h1>Sign Up</h1>
        </div>
      </button>
    </>
  );
};

export default SignupForm;
