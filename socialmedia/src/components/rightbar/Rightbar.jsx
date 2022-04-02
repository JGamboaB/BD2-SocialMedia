import './rightbar.css'

// For friends
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <h4 className='rightbarTitle'>Friends</h4>
        <ul className="rightbarFriendList">

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/1.jpg" alt="" className="rightbarProfileImg" />
            </div>
            <span className="rightbarUsername">William Afton</span>
          </li>
          
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/1.jpg" alt="" className="rightbarProfileImg" />
            </div>
            <span className="rightbarUsername">William Afton</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/1.jpg" alt="" className="rightbarProfileImg" />
            </div>
            <span className="rightbarUsername">William Afton</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/1.jpg" alt="" className="rightbarProfileImg" />
            </div>
            <span className="rightbarUsername">William Afton</span>
          </li>

        </ul>
      </div>
    </div>
  )
}
