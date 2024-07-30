"use client";
import React, { useEffect, useState } from "react";
import Input from "@/(components)/Input/Input";
import toast from "react-hot-toast";
import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const handleSubmitRegister = async () => {
    try {
      await axios.post("/api/register", {
        email,
        password,
        name,
      });

      toast.success("Successfully Added");
      router.push("/signin");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data);
    }
  };

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
        onClick={handleSubmitRegister}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Register
      </button>
    </>
  );
};

export default RegisterForm;
