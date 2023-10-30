import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidbar/SideBar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <SideBar />
        <div className="profileRightSide">
          <div className="profileRightSideTop">
            <div className="profileCover">
                <img
                src="/assets/posts/6.jpg"
                alt=""
                className="profileCoverImage"
                />
                <img
                src="/assets/person/rdj.jpeg"
                alt=""
                className="profileUserImage"
                />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Robert Downey Jr</h4>
                <div className="profileInfoDesc">I'm IronMan</div>          
            </div>
          </div>
          <div className="profileRightSideBottom">
            <Feed />
            <RightBar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
