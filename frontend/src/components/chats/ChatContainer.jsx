import { useEffect } from "react";
import useConversation from "../../zustandstore/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

import { IoIosChatbubbles } from "react-icons/io";
import { useAuthContext } from "../../context/AuthContext";

const ChatContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  //Clean up function to unmount
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='md:min-w-[480px] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-gray-600 px-4 py-2 mb-2'>
            <span className='label-text font-medium text-gray-200'>To: </span>
            <span className='text-gray-200 font-bold'>
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default ChatContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center items-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col'>
        <p>Welcome 👋 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <IoIosChatbubbles className='text-3xl md:text-6xl text-center mt-4' />
      </div>
    </div>
  );
};
