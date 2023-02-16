import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Feed from "./components/feed/Feed";
import Rightbar from "./components/rightbar/Rightbar";
import Profile from "./pages/profile/Profile.jsx";
import './App.css';

function App() {
  return ( 
    <>
      <Topbar />
      <div className="App">

        <Sidebar />
        {/* <Feed /> */}
        <Rightbar />
        {/* <Profile/> */}
        
      </div>
    </>

  );
}

export default App;
