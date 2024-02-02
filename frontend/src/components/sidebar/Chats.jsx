import useGetChats from "../../hooks/useGetChats";
import { getRandomEmoji } from "../../utils/emojis";
import Chat from "./Chat";

const Chats = () => {
  const { loading, chats } = useGetChats();
  return (
    <div className='py-2 flex overflow-auto lg:flex-col'>
      {chats.map((chat, index) => (
        <Chat
          key={chat._id}
          chat={chat}
          emoji={getRandomEmoji()}
          lastIndex={index === chat.length - 1}
        />
      ))}
      {loading ? (
        <span className='loading loading-spinner mx-auto'></span>
      ) : null}
    </div>
  );
};

export default Chats;
