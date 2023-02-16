import React from "react"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Profile from "./pages/profile/Profile.jsx";
import "./Home.css"


export default function Home() {
    return ( <Profile/>
        // <>
        // <Topbar/>
        // <div className="homeContainer">
        //     <Sidebar/>
        //     <Feed/>
        //     <Rightbar/>
        // </div>
        // </>
    )
}