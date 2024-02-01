import { IoMdLogOut } from "react-icons/io";

const LogoutButton = () => {
  return (
    <div className='mt-auto items-center justify-center flex gap-1 lg:cursor-pointer lg:hover:scale-105 lg:justify-start'>
      <IoMdLogOut className='w-6 h-6 text-white rotate-180' />
      <span className='text-sm text-white'>Log Out</span>
    </div>
  );
};

export default LogoutButton;
