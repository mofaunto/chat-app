import useConversation from "../../zustandstore/useConversation";

const Chat = ({ chat, lastIndex, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === chat._id;

  return (
    <>
      <div
        className={`flex items-center hover:bg-green-500 rounded p-2 py-2 cursor-pointer lg:gap-2 ${
          isSelected ? "bg-green-500" : ""
        }
        `}
        onClick={() => setSelectedConversation(chat)}
      >
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src={chat.profilePic} alt='User avatar' />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='hidden lg:flex lg:gap-4 lg:justify-between'>
            <p className='font-bold text-gray-200'>{chat.fullName}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIndex && <div className='divider my-0 py-0 h-1' />}
    </>
  );
};

export default Chat;
