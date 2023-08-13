import './topbar.css'
import React from 'react';

 function TopBar() {
  return (
    <div className="top">
        <div className="name">
            Blog hars
        </div>
        <div className="topLeft">
            <i class="topIcon fa-brands fa-square-x-twitter"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
        </div>

        <div className="topCenter">
            <ul className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li> 
                <li className='topListItem'>LOGOUT</li>           
            </ul>
        </div>
        <div className="topRight">
            <img 
            className='topImg' 
            src="https://img.freepik.com/free-photo/woman-bathing-suit-white-shirt-sea_169016-22415.jpg"
            alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>

  )
}
export default TopBar;