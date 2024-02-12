import React from 'react'
import './post.css'

function post() {
  return (
    <div className='post'>
            <div className="postContainer">

                            <div className="postTop">

                                <img src='https://st3.depositphotos.com/1037331/16407/i/1600/depositphotos_164073808-stock-photo-cute-teen-girl.jpg' alt="" className="postImage" />
                                <span className="userName">suresh</span>
                                <span className="postTime">5min ago</span>
                            </div>
                            <div className="postCenter">

                                <div className="postCaption">hellow i am good</div>
                                <img src="https://w0.peakpx.com/wallpaper/13/336/HD-wallpaper-gautam-buddha-ka-animated-face-siddhartha-gautama-lord-buddha.jpg" alt="" className="postPhoto" />
                            </div>
                            <div className="postBottom">

                                <div className="postBottomLeft">

                                        <img src="./image/like.png" alt="" className="likeIcon" />  
                                        <img src="./image/haha.png" alt="" className="hahaIcon" />  
                                        <img src="./image/love.png" alt="" className="heartIcon" />
                                        <sapn className="likeCount">23 likes</sapn>
                                </div>

                                <div className="postBottomRight">

                                  <span className="commentCount">23 comment </span>
                                </div>
                            </div>
            </div>
    </div>

  )
  }
export default post