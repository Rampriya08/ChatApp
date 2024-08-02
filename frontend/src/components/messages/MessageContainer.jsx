import { useEffect } from "react"
import useConversation from "../../zustand/useConversation"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti"
import { useAuthContext } from "../../context/AuthContext"

const MessageContainer = () => {

  const  {selectedConversation,setSelectedConversation}= useConversation();

  useEffect(()=>{


    return () => setSelectedConversation(null)
  },[setSelectedConversation])

  return (
    <div className="md:min-w-[450px] flex flex-col">
     {!selectedConversation ? (<NoChatSelected />) :(
              <>
              <div className="bg-slate-500 px-4 py-2 mb-2">
                  <span className="label-text">To:</span>{" "}
                <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
              </div>
      
              <Messages />
              <MessageInput />
      
              </>
     )}
      
    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {
  const {authUser}=useAuthContext();
  return (
    <div className="flex items-center justify-center w-full  h-full">
      <div className="x-4 text-center sm:txt-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄
        </p>
        <p>Select a Chat To start Messaging </p>
        <TiMessages className="text-3xl md:txet-6xl text-center" />
        
    
        
        </div>

    </div>
  )
}



// import MessageInput from "./MessageInput"
// import Messages from "./Messages"

// const MessageContainer = () => {

//   const noChatSelected=true;
  
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//         <>
//         <div className="bg-slate-500 x-4 py-2 mb-2">
//             <span className="label-text">To:</span><span className="text-grey-900 font-bold">Icebear</span>
//         </div>

//         <Messages />
//         <MessageInput />

//         </>
//     </div>
//   )
// }

// export default MessageContainer