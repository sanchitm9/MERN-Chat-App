import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    // h-full w-full bg-indigo-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-violet-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
