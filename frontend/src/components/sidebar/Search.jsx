import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustandstore/useConversation";
import useGetChats from "../../hooks/useGetChats";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { chats } = useGetChats();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const chat = chats.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (chat) {
      setSelectedConversation(chat);
      setSearch("");
    } else {
      toast.error("No such user found");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
      <input
        type='text'
        placeholder='Search for Chats'
        className='input input-bordered rounded-full w-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type='submit'
        className='btn btn-circle bg-green-500 text-white border-none hover:bg-green-700'
      >
        <IoSearchSharp className='w-6 h-6 outline-none' />
      </button>
    </form>
  );
};

export default Search;
