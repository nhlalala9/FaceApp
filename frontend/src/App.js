import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Feed from "./components/feed/Feed.jsx";
import Rightbar from "./components/rightbar/Rightbar";
import Profile from "./pages/profile/Profile.jsx";
import Post from "./components/post/Post";
import './App.css';

function App() {
  return ( 
    <>
      <Topbar />
      <div className="Container">
        <Sidebar />
        <Feed/>
        <Rightbar />
      </div>
    </>

  );
}

export default App;
