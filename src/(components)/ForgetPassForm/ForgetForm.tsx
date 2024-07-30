"use client";

import { useEffect, useState } from "react";
import Input from "../Input/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { FaSpinner } from "react-icons/fa";

const ForgetForm = () => {
 
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleforgetPassword=async()=>{
    try {
      setLoading(true)
      await axios.post("/api/forgetpassword", {
        email,
      });
      setLoading(false)
      toast.success("Successfully Sended");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.status);
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <>
      <div>
        <Input
          type="text"
          disable={false}
          value={email}
          label="Email"
          onchange={(e) => setEmail(e.target.value)}
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
