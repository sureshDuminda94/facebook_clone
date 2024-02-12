import React from 'react'
import './addPost.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PhotoIcon from '@mui/icons-material/Photo';

function AddPost() {
  return (
    <div className="addPostBox"> 
    
            <div className="addPostContainer">

                    <div className="addPostTop">

                            <img src='https://st3.depositphotos.com/1037331/16407/i/1600/depositphotos_164073808-stock-photo-cute-teen-girl.jpg' alt="" className="addPostPic" />
                            <input type="text" className="addPostInput"  placeholder='whats on ur mind'/>

                    </div>

                    <hr className='postHr'/>
                    <div className="addPostBottom">

                        <div className="addPostOptions">


                                <div className="addPostOption">
                                        <PhotoIcon htmlColor='orange' className="addPhoto"></PhotoIcon>
                                        <span className="addPostOptionText"> add Photo</span>
                                </div>
                                
                                <div className="addPostOption">
                                <LocationOnIcon htmlColor='red' className="addLocation"></LocationOnIcon>
                                        <span className="addPostOptionText">add Location</span>
                                </div>
                                
                                <div className="addPostOption">
                                <LiveTvIcon htmlColor='tomato' className="addLive"></LiveTvIcon>
                                        <span className="addPostOptionText">Go Live</span>
                                </div>
                                <div className="addPostOption">
                                <LocalOfferIcon htmlColor='blue' className="addTag"></LocalOfferIcon>
                                        <span className="addPostOptionText">Add Tag</span>
                                </div>

                                <button className="postButton">post</button>
                        </div>
                    </div>


            </div>
            </div>
    
  )
}

export default AddPost