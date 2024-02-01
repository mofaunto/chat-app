import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <form className='flex items-center gap-2'>
      <input
        type='text'
        placeholder='Search for Chats'
        className='input input-bordered rounded-full w-full'
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
