import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";
import { GiTumbleweed } from "react-icons/gi";
import { useEffect, useRef } from "react";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}

      {!loading && messages.length === 0 && (
        <div className='flex flex-col items-center justify-center gap-2 h-full'>
          <GiTumbleweed className='text-gray-200 w-20 h-20 animate-spin animate-infinite animate-duration-[2000ms] animate-delay-1000 animate-ease-in-out' />
          <p className='text-center text-gray-200'>So empty here!</p>
          <p className='text-center text-gray-200'>
            Send a message to start a conversation!
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
