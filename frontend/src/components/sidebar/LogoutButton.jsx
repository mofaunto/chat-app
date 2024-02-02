import { IoMdLogOut } from "react-icons/io";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className='mt-auto'>
      {!loading ? (
        <div
          className='items-center justify-center flex gap-1 lg:cursor-pointer lg:justify-start'
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
