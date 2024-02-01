import Sidebar from "../../components/sidebar/Sidebar";
import ChatContainer from "../../components/chats/ChatContainer";

function Home() {
  return (
    <div className='flex flex-col h-full md:h-[800px] lg:h-[600px] rounded-lg bg-gray-600 backdrop-filter backdrop-blur-md bg-opacity-70 overflow-auto lg:flex-row lg:overflow-hidden'>
      <Sidebar />
      <ChatContainer />
    </div>
  );
}

export default Home;
