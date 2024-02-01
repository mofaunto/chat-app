import Chats from "./Chats";
import LogoutButton from "./LogoutButton";
import Search from "./Search";

function Sidebar() {
  return (
    <div className='p-4 flex flex-col lg:border-r lg:border-slate-600'>
      <Search />
      <div className='lg:divider lg:w-full'></div>
      <Chats />
      <LogoutButton />
    </div>
  );
}

export default Sidebar;
