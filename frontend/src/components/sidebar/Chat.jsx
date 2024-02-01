const Chat = () => {
  return (
    <>
      <div className='flex items-center hover:bg-green-500 rounded p-2 py-2 cursor-pointer lg:gap-2'>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img
              src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png'
              alt='User avatar'
            />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='hidden lg:flex lg:gap-4 lg:justify-between'>
            <p className='font-bold text-gray-200'>John Doe</p>
            <span className='text-xl'>😎</span>
          </div>
        </div>
      </div>

      <div className='divider my-0 py-0 h-1' />
    </>
  );
};

export default Chat;
