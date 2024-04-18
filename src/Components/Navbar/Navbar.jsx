import React from 'react'
import './Navbar.css'
import menuIcon from '../../Assets/assets/menu.png'
import youtube from '../../Assets/assets/Youtube.png'
import searchIcon from '../../Assets/assets/search.png'
import uploadIcon from '../../Assets/assets/upload.png'
import moreIcon from '../../Assets/assets/more.png'
import notificationIcon from '../../Assets/assets/notification.png'
// import jackIcon from '../../Assets/assets/jack.png'
import huzaifa from '../../Assets/assets/huzaifa.jpg'
import { Link } from 'react-router-dom'

const Navbar = ({setMenu}) => {
  return (
    <div className='nav'>
        <div className='nav-left'>
            <img src={menuIcon} className='menu' onClick={() => setMenu(prev => prev === false?true:false)} alt="" />
            <Link to='/' >
                <img src={youtube} className='logo' alt="" />
            </Link>
        </div>
        
        <div className='nav-middle'>
            <div className='searchbar'>
                <input type="text" placeholder='Search' />
                <img src={searchIcon} alt="" />
            </div>
        </div>

        <div className='nav-right'>
            <img src={uploadIcon} alt="" />
            <img src={moreIcon} alt="" />
            <img src={notificationIcon} alt="" />
            <img src={huzaifa} className='profile' alt="" />
        </div>      
    </div>
  )
}

export default Navbar
