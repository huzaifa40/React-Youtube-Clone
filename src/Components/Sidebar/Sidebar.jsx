import React from 'react'
import './Sidebar.css'
import homeIcon from '../../Assets/assets/home.png'
import gameIcon from '../../Assets/assets/game_icon.png'
import automobiles from '../../Assets/assets/automobiles.png'
import sports from '../../Assets/assets/sports.png'
import entertainment from '../../Assets/assets/entertainment.png'
import tech from '../../Assets/assets/tech.png'
import music from '../../Assets/assets/music.png'
import blogs from '../../Assets/assets/blogs.png'
import news from '../../Assets/assets/news.png'
import jack from '../../Assets/assets/jack.png'
import simon from '../../Assets/assets/simon.png'
import tom from '../../Assets/assets/tom.png'
import megan from '../../Assets/assets/megan.png'
import cameron from '../../Assets/assets/cameron.png'

const Sidebar = ({menu}) => {
  return (
    <div className={`sidebar ${menu?'':'small'}`}>
        <div className='shortcut-links'>
            <div className='side-links'>
                <img src={homeIcon} alt="" /><p>Home</p>
            </div>
            <div className='side-links'>
                <img src={gameIcon} alt="" /><p>Gaming</p>
            </div>
            <div className='side-links'>
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className='side-links'>
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className='side-links'>
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className='side-links'>
                <img src={tech} alt="" /><p>Tech</p>
            </div>
            <div className='side-links'>
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className='side-links'>
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            <div className='side-links'>
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr />
        </div>

        <div className='subscribed-links'>
            <h4>Subscribed</h4>

            <div className='side-links'>
                <img src={jack} alt="" /><p>PewDiePie</p>                
            </div>
            <div className='side-links'>
                <img src={simon} alt="" /><p>MrBeast</p>                
            </div>
            <div className='side-links'>
                <img src={tom} alt="" /><p>Justin Bieber</p>                
            </div>
            <div className='side-links'>
                <img src={megan} alt="" /><p>5-Minute Crafts</p>                
            </div>
            <div className='side-links'>
                <img src={cameron} alt="" /><p>Nas Daily</p>                
            </div>

        </div>
      
    </div>
  )
}

export default Sidebar
