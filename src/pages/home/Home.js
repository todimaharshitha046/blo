import Header from '../../components/header/Header.js'
import Posts from '../../components/posts/Posts.js'
import Sidebar from '../../components/sidebar/Sidebar.js'
import  './home.css'
import React from 'react';

export default function Home() {
  return (
    <>
      <Header/>
      <div className='home'>
          <Posts/>
          <Sidebar/>
      </div>
    </>
  )
}
