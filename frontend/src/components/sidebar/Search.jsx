import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const Search = () => {

  const[search,setSearch]=useState("");
  const {setSelectedConversation}= useConversation();
  const {conversations}=useGetConversation();

  const handleSubmit =(e) =>{
    e.preventDefault();
    if(!search) return ;
    if(search.length <3){
      toast.error("Search terms must be at least 5 characters long")
    }

    const conversation=conversations.find((c) =>c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
    }else toast.error('No such User Found')

  }

  return (
    <form className="flex items-center gap-2 p-4" onSubmit={handleSubmit}>

        <input type="text" placeholder="search.." className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-yellow-500 text-white">
        <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>

    </form>

  )
}

export default Search