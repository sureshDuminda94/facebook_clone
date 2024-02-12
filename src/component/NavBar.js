import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import SettingsIcon from '@mui/icons-material/Settings';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';

import './navBar.css'
const obj={

    name:"suresh",
    age:"67",


}


function fun() {

    const data ={


        ...obj,

        id:"1",
    }


 console.log(data);


}




function NavBar() {
  return (
    <div className="navBarBox">

        <div className="navBarLeft">
            <div className="logo"> facebook</div>
        </div>
        <div className="navBarCenter">
            <div className="searchBox">


                <SearchIcon className='searchIcon'/>
                <input placeholder='search friend' className='searchInput' type='text'/>
            </div>
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <span className="navBarLink">home</span>
                <span className="navBarLink">profile</span>
             </div>
        

            <div className='navBarIcons'>

            <div className="navBarIcon">
                <PersonIcon></PersonIcon>
                <span className='iconTag'>2</span>

            </div>
            <div className="navBarIcon">
                <MessageIcon/>
                <span className='iconTag'>1</span>
            </div>
            <div className="navBarIcon">
                <SettingsIcon/>
                <span className='iconTag'>3</span>
            </div>
            </div>
                <div className="pic" >
                    <img style={{width:50, height:50 , borderRadius:50,  marginLeft:50}}src='https://st3.depositphotos.com/1037331/16407/i/1600/depositphotos_164073808-stock-photo-cute-teen-girl.jpg'/>
                </div>
        </div>
            
          
    </div>

    
  )
} 

export default NavBar