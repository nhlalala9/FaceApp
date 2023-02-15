import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Feed from "./components/feed/Feed";
import Rightbar from "./components/rightbar/Rightbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Sidebar />
      {/* <Feed /> */}
        <Rightbar />
    </div>

  );
}

export default App;
