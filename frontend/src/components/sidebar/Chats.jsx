import useGetChats from "../../hooks/useGetChats";
import { getRandomEmoji } from "../../utils/emojis";
import Chat from "./Chat";

const Chats = () => {
  const { loading, chats } = useGetChats();
  return (
    <div className='no-scrollbar overflow-x-auto py-2 my-2 flex lg:overflow-auto lg:flex-col scroll-smooth'>
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
