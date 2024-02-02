import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className='px-4 my-4' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input
          type='text'
          placeholder='Enter your message'
          className='border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type='submit'
          className='absolute inset-y-0 end-0 flex items-center pe-4'
        >
          {loading ? (
            <div className='loading loading-spinner'></div>
          ) : (
            <IoIosSend className='text-green-500 w-5 h-5' />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
