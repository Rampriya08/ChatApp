import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";


const useLogin = () => {
    const [loading,setLoading] =useState(false);

    const {setAuthUser}=useAuthContext();

    const login =async ({userName,password})=>{
        const success= handleInputErrors({userName,password})
    if(!success) return;

    setLoading(true);
    try{

      const res = await fetch(
        "https://chatapp-41d7.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userName, password }),
        }
      );

      const data=await res.json();
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.setItem("chat-user",JSON.stringify(data));

      setAuthUser(data);
      console.log(data);

    }catch(error){
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  }
  return {loading ,login}
}

export default useLogin

function handleInputErrors({userName,password}){
    if( !userName ||!password ){
        toast.error("Please fill all the feilds");
        return false;
    }
    return true;
}