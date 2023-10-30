import "./online.css";

function Online({ user }) {
    const { profilePicture, username } = user;
  return (
    <li className="rightBarOnlineFriend">
      <div className="rightBarImageContainer">
        <img
          src={profilePicture}
          alt="OnlineProfile"
          className="rightBarImage"
        />
        <span className="rightBarOnline"></span>
      </div>
          <span className="rightBarOnlineUsername">{username}</span>
    </li>
  );
}

export default Online;
