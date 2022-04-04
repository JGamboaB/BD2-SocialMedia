import "./sidebar.css"
import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Group, Bookmark, Help, WorkOutline, School } from "@mui/icons-material";
import EventIcon from '@mui/icons-material/Event';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="SidebarList">
                <li className="sidebarListItem">
                    <FeedIcon className="sidebarIcon" />
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon className="sidebarIcon" />
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <LiveTvIcon className="sidebarIcon" />
                    <span className="sidebarListItemText">Live Feed</span>
                </li>
                <li className="sidebarListItem">
                    <VideocamIcon className="sidebarIcon" />
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <Group className="sidebarIcon" />
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon" />
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <Help className="sidebarIcon" />
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon" />
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <EventIcon className="sidebarIcon" />
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <School className="sidebarIcon" />
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <h4 className="sidebarTitle">Friends</h4>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">William Afton</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">William Afton</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">William Afton</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">William Afton</span>
                </li>
                <li className="sidebarFriend">
                    <img src="/assets/1.jpg" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">William Afton</span>
                </li>

            </ul>
        </div>
    </div>
  )
}
