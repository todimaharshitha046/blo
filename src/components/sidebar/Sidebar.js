import './sidebar.css'
import React from 'react';

//import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/736x/21/4a/f6/214af69f035499f96c53b57482ba2933.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            
              Life
            
          </li>
          <li className="sidebarListItem">
            
              Music
            
          </li>
          <li className="sidebarListItem">
            
              Sport
            
          </li>
          <li className="sidebarListItem">
            
              Style
            
          </li>
          <li className="sidebarListItem">
            
              Tech
            
          </li>
          <li className="sidebarListItem">
            
              Cinema
            
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
        </div>
      </div>
    </div>
  );
}
