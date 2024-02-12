import React from 'react'
import NavBar from'../NavBar'
import LeftPane from '../LeftPane/LeftPane'
import PostPane from '../PostPane/PostPane'
import RightBox from '../RightPane/RightBox'
import './home.css'
function Home() {
  return (
    < div className='home'>
        <NavBar/>
        <div className="bottomContainer">
        <LeftPane/>
        <PostPane/>
        <RightBox/>
        </div>
    </div>
  
  )
}

export default Home