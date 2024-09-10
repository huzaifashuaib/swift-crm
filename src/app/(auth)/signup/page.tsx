import { svgIcon } from "@/constants/svgIcon";
import Image from "next/image";
import SignupForm from "@/(components)/signupForm/SignupForm";

const SignUpPage = () => {
  const { logo } = svgIcon;
  return (
    <>
      <div className=" bg-backgroundImg bg-no-repeat bg-cover flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="flex justify-center items-center my-5">
            <Image src={logo} alt="logo" width={140} />
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
