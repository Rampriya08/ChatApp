import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';


const Message = ({message}) => {
  const {authUser}=useAuthContext();

  const {selectedConversation} =useConversation();

  const fromMe=message.senderId ===authUser._id;

  const chatClassName= fromMe ? 'chat-end' :'chat-start';
  const profilePic =fromMe ? authUser.profilePic :selectedConversation?.profilePic;

  const bgColor= fromMe ? 'bg-yellow-500' :"";

  const shakeCls= message.shouldShake ? "shake" :"";
  console.log(message.message);

  const formatedTime=extractTime(message.createdAt)

  

  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
        <div className='w-12 rounded-full'>
            <img 
            src={profilePic}
            alt="Tailwind CSs Chat Bubble Component" 
            />
            </div>
        </div>
    <div className={`chat-bubble text-white ${bgColor} ${shakeCls} pb-2`}>{message.message}</div>
    <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-gray-200">
      {formatedTime}
    </div>

    </div>
  )
}

export default Message