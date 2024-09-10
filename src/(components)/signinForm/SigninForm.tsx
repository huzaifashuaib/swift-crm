"use client";
import Input from "@/(components)/input/Input";
import useSigninForm from "./useSigninForm";

const SigninForm = () => {
  const {
    formData,
    loading,
    googleLoading,
    FaGoogle,
    FaSpinner,
    handleGoogleSubmit,
    handleSubmit,
    handleInputChange,
  } = useSigninForm();

  return (
    <>
      <div>
        <Input
          type="email"
          disable={false}
          value={formData.email}
          label="Email"
          name="email" 
          placeholder="Enter Your Email"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Input
          type="password"
          disable={false}
          value={formData.password}
          label="Password"
          name="password"
          placeholder="Enter Your Password"
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
        disabled={loading}
      >
        <div className="flex justify-center items-center gap-1">
          {loading && <FaSpinner className="animate-spin mr-2" />}
          <h1>Sign In</h1>
        </div>
      </button>
      <hr className="my-4" />
      <button
        onClick={handleGoogleSubmit}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
        disabled={googleLoading}
      >
        <div className="flex justify-center items-center gap-1">
          {googleLoading && <FaSpinner className="animate-spin mr-2" />}
          <h1 className="flex justify-center items-center gap-2">
            Sign In with Google <FaGoogle />
          </h1>
        </div>
      </button>
    </>
  );
};

export default SigninForm;
