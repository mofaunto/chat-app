import MessageInput from "./MessageInput";
import Messages from "./Messages";

import { IoIosChatbubbles } from "react-icons/io";

const ChatContainer = () => {
  const noChatSelected = false;
  return (
    <div className='md:min-w-[480px] flex flex-col'>
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className='bg-gray-600 px-4 py-2 mb-2'>
            <span className='label-text font-medium text-gray-200'>To: </span>
            <span className='text-gray-200 font-bold'>John Doe</span>
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
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center items-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col'>
        <p>Welcome 👋 John Doe</p>
        <p>Select a chat to start messaging</p>
        <IoIosChatbubbles className='text-3xl md:text-6xl text-center mt-4' />
      </div>
    </div>
  );
};
