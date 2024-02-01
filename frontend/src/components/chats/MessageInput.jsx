import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <form className='px-4 my-4'>
      <div className='w-full relative'>
        <input
          type='text'
          placeholder='Enter your message'
          className='border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white'
        />
        <button
          type='submit'
          className='absolute inset-y-0 end-0 flex items-center pe-4'
        >
          <IoIosSend className='text-green-500 w-5 h-5' />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
