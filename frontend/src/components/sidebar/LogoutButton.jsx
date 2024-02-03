import { IoMdLogOut } from "react-icons/io";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className='my-4 mx-auto lg:mx-0'>
      {!loading ? (
        <div
          className='items-center justify-center flex gap-2 py-2 px-4 border-2 rounded-xl lg:cursor-pointer lg:justify-start lg:border-none lg:py-0 lg:px-0 lg:items-start'
          onClick={logout}
        >
          <IoMdLogOut className='w-6 h-6 text-white rotate-180' />
          <span className='text-sm text-white'>Log Out</span>
        </div>
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
};

export default LogoutButton;
