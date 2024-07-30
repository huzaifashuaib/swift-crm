import FormLogin from "@/(components)/SigninForm/LoginForm";
import Image from "next/image";
import Link from "next/link";
import { svgIcon } from "@/constants/svgIcon";

const LoginForm = () => {
  const {logo}=svgIcon
  return (
    <div className=" bg-backgroundImg bg-no-repeat bg-cover flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center items-center my-5">
          <Image src={logo} alt="" width={140} />
        </div>
       <FormLogin />

        <hr className="my-4" />

        
        <p className="text-center my-2">
        Forget Password?  {" "}
          <Link
            href="/forgetpassword"
            className="text-blue-500 underline hover:text-blue-700 transition-colors relative group"
          >
            Reset
            <span className="absolute inset-0 rounded-lg bg-blue-200 opacity-0 group-hover:opacity-50 transition-opacity"></span>
          </Link>
        </p>

        <p className="text-center my-2">
          Don't have an Account?  {" "}
          <Link
            href="/signup"
            className="text-blue-500 underline hover:text-blue-700 transition-colors relative group"
          >
       Sign up 
            <span className="absolute inset-0 rounded-lg bg-blue-200 opacity-0 group-hover:opacity-50 transition-opacity"></span>
          </Link>
        </p>


      </div>
    </div>
  );
};

export default LoginForm;
