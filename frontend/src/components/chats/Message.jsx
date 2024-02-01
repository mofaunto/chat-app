const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img
            src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png'
            alt='User avatar'
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-green-500`}>Hello there!</div>
      <div className='chat-footer text-white opacity-50 text-xs flex gap-1 items-center'>
        12:42
      </div>
    </div>
  );
};

export default Message;
