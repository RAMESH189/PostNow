import "./friendlist.css"

function FriendList({ user }) {
    const { profilePicture, username } = user;
  return (
    <li className="sideBarFriendListItem">
            <img src={profilePicture} alt="personImage" className="sideBarFriendListImage" />
          <span className="sideBarFriendListName">{username}</span>
          </li>
  )
}

export default FriendList;
