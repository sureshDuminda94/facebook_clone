import React from 'react'
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



import './leftPane.css'
import { Feed } from '@mui/icons-material';
function LeftPane() {
  return (
    <div className="leftBox">

            <div className="menuContainer">

                    <div className="menu">

                            <li className="menuItemList">
                                                <MarkChatUnreadIcon className='menuIcon'/>
                                                <span className="menuText">message</span>

                            </li>

                            <li className="menuItemList">
                                                <GroupIcon className='menuIcon'/>
                                                <span className="menuText">group</span>

                            </li>
                            <li className="menuItemList">
                                                <RssFeedIcon className='menuIcon'/>
                                                <span className="menuText">feed</span>

                            </li>
                            <li className="menuItemList">
                                                <SportsEsportsIcon className='menuIcon'/>
                                                <span className="menuText">game</span>

                            </li>
                            <li className="menuItemList">
                                                <BuildIcon className='menuIcon'/>
                                                <span className="menuText">build</span>

                            </li>
                            <li className="menuItemList">
                                                <NewspaperIcon className='menuIcon'/>
                                                <span className="menuText">News</span>

                            </li>
                            <li className="menuItemList">
                                                <WorkOutlineIcon className='menuIcon'/>
                                                <span className="menuText">jobs</span>

                            </li>
                            <li className="menuItemList">
                                                <AddShoppingCartIcon className='menuIcon'/>
                                                <span className="menuText">shoping</span>

                            </li>
                            <li className="menuItemList">
                                                <CalendarMonthIcon className='menuIcon'/>
                                                <span className="menuText">jobs</span>

                            </li>
                            <li className="menuItemList">
                                                <FlagIcon className='menuIcon'/>
                                                <span className="menuText">shoping</span>

                            </li>
                        <hr/>
                        <div className="pagesULike">

                                    <h2>pages u like</h2>

                        </div>

                            <div className="likespage ">


                            <div className="pageLikeListItem">


                                                    <img className='picPage' src='https://as2.ftcdn.net/v2/jpg/05/04/55/37/1000_F_504553778_0wBZJ8ugKTnOSgWSOuaahCquXjbACGpz.jpg'/>
                                                    <span className='pageName'> loard budhdha</span>
                            </div>

                            <div className="pageLikeListItem">


                                    <img className='picPage' src='https://as2.ftcdn.net/v2/jpg/05/04/55/37/1000_F_504553778_0wBZJ8ugKTnOSgWSOuaahCquXjbACGpz.jpg'/>
                                    <span className='pageName'> loard budhdha</span>
                                    </div>
<div className="pageLikeListItem">


                                            <img className='picPage' src='https://as2.ftcdn.net/v2/jpg/05/04/55/37/1000_F_504553778_0wBZJ8ugKTnOSgWSOuaahCquXjbACGpz.jpg'/>
                                            <span className='pageName'> loard budhdha</span>
                                            </div>
<div className="pageLikeListItem">


                                            <img className='picPage' src='https://as2.ftcdn.net/v2/jpg/05/04/55/37/1000_F_504553778_0wBZJ8ugKTnOSgWSOuaahCquXjbACGpz.jpg'/>
                                            <span className='pageName'> loard budhdha</span>
                                            </div>
<div className="pageLikeListItem">


                                            <img className='picPage' src='https://as2.ftcdn.net/v2/jpg/05/04/55/37/1000_F_504553778_0wBZJ8ugKTnOSgWSOuaahCquXjbACGpz.jpg'/>
                                            <span className='pageName'> loard budhdha</span>
                                            </div>
                            </div>

                    </div>

            </div>

    </div>
  )
}

export default LeftPane