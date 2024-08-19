// import axios from "axios";
// import { signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { FaSpinner } from "react-icons/fa";

import { useAppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";


// const useSignupForm=()=>{
//     useEffect(() => {
//         signOut({
//           redirect: false,
//         });
//       }, []);
//       const [email, setEmail] = useState("");
//       const [password, setPassword] = useState("");
//       const [name, setName] = useState("");
//       const [loading, setLoading] = useState(false);
    
//       const router = useRouter();
    
//       const handleSubmitRegister = async () => {
//         try {
//           setLoading(true)
//           await axios.post("/api/register", {
//             name,
//             email,
//             password,
//           });
//           setLoading(false)
    
//           toast.success("Successfully Added");
//           router.push("/signin");
//         } catch (error: any) {
//           console.log(error);
//           toast.error(error?.response?.data);
//         }
//         finally{
//           setLoading(false)
//         }
//       };
//       return {
//         email,
//         setEmail,
//         password,
//         setPassword,
//         name,
//         setName,
//         loading,
//         setLoading ,
//         handleSubmitRegister,
//         FaSpinner
//       }
// }

// export default useSignupForm;


import { setName, setEmail, setPassword, signupUser } from "@/redux/slices/usersSlice"; 

const useSignupForm = () => {
  const dispatch =useAppDispatch() 
  const { name, email, password, loading } = useAppSelector((state) => state.signup);

  const handleSubmitRegister = () => {
    dispatch(signupUser({ name, email, password }));
  };

  return {
    name,
    setName: (name: string) => dispatch(setName(name)),
    email,
    setEmail: (email: string) => dispatch(setEmail(email)),
    password,
    setPassword: (password: string) => dispatch(setPassword(password)),
    loading,
    handleSubmitRegister,
  };
};

export default useSignupForm;
