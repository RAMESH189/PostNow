import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";


const HomeRightbar = () => {
  return (
    <>
      <div className="birthdayContainer">
          <img
            src="/assets/birthday.jpeg"
            alt="birthday"
            className="giftImage"
          />
          <span className="birthdayNotification">
            Some of your frinds have <b>Birthday</b> today. Go ahead and wish
            them a <b>Happy birthday.</b>{" "}
          </span>
        </div>
        <img src="/assets/ad.jpg" alt="ad" className="rightBarAd" />
        <h4 className="rightBarTitle">Online</h4>
        <ul className="rightBarOnlineFriends">
          {
            Users.map(user => (
              <Online key={user.id} user={user} />
            ))
          }
        </ul>
    </>
  )
}

const ProfileRightbar = () => {
  return (
  <>
      <h4 className="userInfoRightbarHeader">User Information</h4>
      <div className="userInfo">
        <div className="userInfoItem">
          <span className="itemLabel">City : </span>
          <span className="itemText">New york city</span>
        </div>
        <div className="userInfoItem">
          <span className="itemLabel">Profession : </span>
          <span className="itemText">Actor</span>
        </div>
        <div className="userInfoItem">
          <span className="itemLabel">status : </span>
          <span className="itemText">Single</span>
        </div>
      </div>
      <h4 className="userInfoRightbarHeader">Followers</h4>
      <div className="userFollowersRightBar">
        <div className="userFollowerItem">
          <img src="/assets/person/al-pachino.jpeg" alt="followerImage" className="followerImage" />
          <span className="FollowerName">Al Pacino</span>
        </div>
        <div className="userFollowerItem">
          <img src="/assets/person/dadario.jpeg" alt="followerImage" className="followerImage" />
          <span className="FollowerName">Alexandra Daddario</span>
        </div>
        <div className="userFollowerItem">
          <img src="/assets/person/tom.jpeg" alt="followerImage" className="followerImage" />
          <span className="FollowerName">Tom Cruise</span>
        </div>
        <div className="userFollowerItem">
          <img src="/assets/person/brad.jpg" alt="followerImage" className="followerImage" />
          <span className="FollowerName">Brad Pitt</span>
        </div>
        <div className="userFollowerItem">
          <img src="/assets/person/margot.jpg" alt="followerImage" className="followerImage" />
          <span className="FollowerName">Margot Robbie</span>
        </div>
        <div className="userFollowerItem">
          <img src="/assets/person/salma.jpeg" alt="followerImage" className="followerImage" />
          <span className="FollowerName">Salma Hayek</span>
        </div>
        <div className="userFollowerItem">
          <img src="/assets/person/gal.jpeg" alt="followerImage" className="followerImage" />
          <span className="FollowerName">Gal Gadot</span>
        </div>
        <div className="userFollowerItem">
          <img src="/assets/person/chris.jpg" alt="followerImage" className="followerImage" />
          <span className="FollowerName">Chris Hemsworth</span>
        </div>
        <div className="userFollowerItem">
          <img src="/assets/person/johny.jpg" alt="followerImage" className="followerImage" />
          <span className="FollowerName">Johny Depp</span>
        </div>
      </div>
  </>
  )
}

function RightBar({profile}) {
  return (
    <div className="rightBar">
      <div className="rightBarWRapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default RightBar;
