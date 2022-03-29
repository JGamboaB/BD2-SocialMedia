import "./topbar.css"

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">FacebookPirata</span>
        </div>
        <div className="topbarCenter">
         <div className="searchbar">
          <SearchIcon classname="searchIcon"/>
          <input type="text" placeholder="Search for friend, post or video" className="searchInput" />
         </div>
        </div>
        <div className="topbarRight">
          <div className="topBarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink"></span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatIcon/>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <NotificationsIcon/>
              <span className="topbarIconBadge">1</span>
            </div>
            <img src="assets/1.jpg" alt="" className="topbarImg" width={32} height={32}/>
          </div>
        </div>
    </div>
  )
}
