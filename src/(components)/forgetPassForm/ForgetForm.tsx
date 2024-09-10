"use client";
import Input from "@/(components)/input/Input";
import useForgetForm from "./useForgetForm";

const ForgetForm = () => {
  const { email, setEmail, loading, handleforgetPassword, FaSpinner } =
    useForgetForm();

  return (
    <>
      <div>
        <Input
          type="text"
          disable={false}
          name=""
          value={email}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
      </div>

      <button
        onClick={handleforgetPassword}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        <div className="flex justify-center items-center gap-1">
          {loading && <FaSpinner className="animate-spin mr-2" />}
          <h1 className="flex justify-center items-center gap-2"> Send</h1>
        </div>
      </button>
    </>
  );
};

export default ForgetForm;
