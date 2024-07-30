"use client";
import React, { useEffect, useState } from "react";
import Input from "@/(components)/Input/Input";
import toast from "react-hot-toast";
import { signIn, signOut } from "next-auth/react";
import { FaSpinner } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


const FormLogin = () => {
  useEffect(() => {
    signOut({ redirect: false });
  }, []);

  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (login?.ok) {
      toast.success("Successfully Logged In");
      window.location.assign("/");
    } else if (login?.error) {
      toast.error(login?.error);
    }
  };

  const handleGoogleSubmit = async () => {
    setGoogleLoading(true);
    await signIn("google", { callbackUrl: "/" });
    setGoogleLoading(false);
  };

  return (
    <>
      <div>
        <Input
          type="email"
          disable={false}
          value={email}
          label="Email"
          placeholder="Enter Your Email"
          onchange={(e) => setEamil(e.target.value)}
        />
      </div>
      <div>
        <Input
          type="password"
          disable={false}
          value={password}
          label="Password"
          placeholder="Enter Your Password"
          onchange={(e) => setPassword(e.target.value)}
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
          <h1 className="flex justify-center items-center gap-2">Sign In with Google <FaGoogle /></h1>
        </div>
      </button>
    </>
  );
};

export default FormLogin;
