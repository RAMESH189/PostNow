import './sidebar.css'
import { RssFeed, Chat, Videocam, Groups, Bookmarks, Help, Work, Event, School } from '@mui/icons-material';
import { Users } from '../../dummyData';
import FriendList from '../friendlist/FriendList'; 

function SideBar() {
  return (
    <div className='sideBar'>
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className='sideBarListItemIcon'/>
            <span>Feed</span>
          </li>
          <li className="sideBarListItem">
            <Chat className='sideBarListItemIcon'/>
            <span>Chats</span>
          </li>
          <li className="sideBarListItem">
            <Videocam className='sideBarListItemIcon'/>
            <span>Videos</span>
          </li>
          <li className="sideBarListItem">
            <Groups className='sideBarListItemIcon'/>
            <span>Groups</span>
          </li>
          <li className="sideBarListItem">
            <Bookmarks className='sideBarListItemIcon'/>
            <span>Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <Help className='sideBarListItemIcon'/>
            <span>Questions</span>
          </li>
          <li className="sideBarListItem">
            <Work className='sideBarListItemIcon'/>
            <span>Jobs</span>
          </li>
          <li className="sideBarListItem">
            <Event className='sideBarListItemIcon'/>
            <span>Events</span>
          </li>
          <li className="sideBarListItem">
            <School className='sideBarListItemIcon'/>
            <span>Courses</span>
          </li>
        </ul>
        <button className="sidBarButton">Show more</button>
        <hr className='sideBarHr' />
        <ul className="sideBarFriendList">
          {
            Users.map((user) => (
              <FriendList key={user.id} user={user} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SideBar;
