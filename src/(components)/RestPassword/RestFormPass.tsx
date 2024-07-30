"use client"
import React, { useState } from 'react'
import Input from '../Input/Input'
import { FaSpinner } from 'react-icons/fa'
import toast from 'react-hot-toast'
import axios from 'axios'

const RestFormPass = ({token}:{token:string}) => {
    const [newPassword,setnewPassword]=useState("")
    const [enterPassword,setReEnterPassword]=useState("")
    const [loading,setloading]=useState(false)

    const handleRestPass=async()=>{
      if(newPassword==enterPassword && enterPassword!="" && newPassword!=""){
        try {
          setloading(true)
          await axios.post("/api/updatepassword", {
            newPassword,
            token
          });
          setloading(false)
    
          toast.success("Successfully ");
        } catch (error: any) {
          console.log(error);
          toast.error(error?.response?.data);
        }
        finally{
          setloading(false)
        }
      }
      else if(newPassword=="" || enterPassword==""){
        toast.error("Please Fill Password Feild")
      }
      else{
        toast.error("Password Not Match")
      }
    }
  return (
    <>
    <div>
      <Input
        type="password"
        disable={false}
        value={newPassword}
        label="New Password"
        onchange={(e) => setnewPassword(e.target.value)}
        placeholder="Enter Email"
      />
    </div>

    <div>
      <Input
        type="password"
        disable={false}
        value={enterPassword}
        label="Re-Enter Password"
        onchange={(e) => setReEnterPassword(e.target.value)}
        placeholder="Re-Enter Password"
      />
    </div>

    <button
    onClick={handleRestPass}
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
       <div className="flex justify-center items-center gap-1">
        {loading && <FaSpinner className="animate-spin mr-2" />}
        <h1 className="flex justify-center items-center gap-2"> Reset Password</h1>
      </div>
     
    </button>
  </>
  )
}

export default RestFormPass