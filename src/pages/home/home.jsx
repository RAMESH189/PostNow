import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidbar/SideBar";
import RightBar from "../../components/rightbar/RightBar";
import Feed from "../../components/feed/Feed";
import './home.css'

function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  )
}

export default Home;
