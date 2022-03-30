import './post.css'

// Edit post if userid == postuserid
// Comments

// People -> muestra todas las personas

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/1.jpg" alt="" />
                    <span className="postUsername">
                        Michael Afton
                    </span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey!</span>
                <img src="/assets/2.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom"> 
                <div className="postBottomLeft"></div>
                <div className="postBottomRight"></div>
            </div>
        </div>
    </div>
  )
}

// COMMENTS!!!
