import './rightbar.css'

// For friends
export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
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
      </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <div className='rightbarProfile'>

      <h4 className="rightbarTitle"> User info</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Intereses:</span>
          <span className="rightbarInfoValue">FNAF</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Hobbies:</span>
          <span className="rightbarInfoValue">Working</span>
        </div>
      </div>

      </div>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
