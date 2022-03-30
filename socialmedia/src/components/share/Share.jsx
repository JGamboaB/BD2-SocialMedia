import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PostAddIcon from '@mui/icons-material/PostAdd';

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/1.jpg" alt="" className="shareProfileImg" />
                <input placeholder="What's on your mind?" type="text" className="shareInput" />
            </div>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="blue" className='shareIcon'/>
                        <span className="shareOptionText">Photo</span>
                    </div>
                    <div className="shareOption">
                        <VideoCameraBackIcon htmlColor="green" className='shareIcon'/>
                        <span className="shareOptionText">Video</span>
                    </div>
                    <div className="shareOption">
                        <PostAddIcon htmlColor="goldenrod" className='shareIcon'/>
                        <span className="shareOptionText">Document</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
