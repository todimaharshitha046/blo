import './header.css'
import React from 'react';

export default function Header() {
  return (
    <div className="header">
        <div className='headerTitles'>
            <span className='headerTitleSm'>React and Nide</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
        className="headerImg"
        src="https://images.pond5.com/happy-woman-bikini-and-shirt-footage-089292959_prevstill.jpeg" 
        alt="" />
    </div>
  )
}
