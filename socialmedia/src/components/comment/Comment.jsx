import './comment.css'

export default function Comment() {
  return (
    <div className='comment'>
      <div className='commentWrapper'>
        <div className='commentLeft'>
          <img className="commentProfileImg" src="/assets/1.jpg" alt="" />
        </div>
        <div className="commentRight">
          <div className="commentRightTop">
            <span className="commentUsername"> Michael Afton </span>
            <span className="commentDate">5 min ago</span>
          </div>
          <div className="commentText">
            Here's my comment!
          </div>

          <div className="commentReply">
            
          </div>

        </div>
      </div>
    </div>
  )
}
