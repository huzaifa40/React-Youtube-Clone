import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({menu}) => {
  return (
    <div>
        <Sidebar menu={menu}/>
        {/* <div className={`container ${menu?'':'big-container'}`}>
          <Feed menu={menu}/>
        </div> */}
        <div className={`container ${menu?'':'big-container'}`}>
          <Feed />
        </div>
    </div>
  )
}

export default Home
