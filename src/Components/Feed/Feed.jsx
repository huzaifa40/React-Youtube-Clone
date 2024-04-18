import React from 'react'
import './Feed.css'
import thumbnail1 from '../../Assets/assets/thumbnail1.png'
import thumbnail2 from '../../Assets/assets/thumbnail2.png'
import thumbnail3 from '../../Assets/assets/thumbnail3.png'
import thumbnail4 from '../../Assets/assets/thumbnail4.png'
import thumbnail5 from '../../Assets/assets/thumbnail5.png'
import thumbnail6 from '../../Assets/assets/thumbnail6.png'
import thumbnail7 from '../../Assets/assets/thumbnail7.png'
import thumbnail8 from '../../Assets/assets/thumbnail8.png'
import { Link } from 'react-router-dom'

const Feed = () => {
  return (
    <div className='feed'>
        <Link to={`/video/1/1`} className='card'>
            <img src={thumbnail1} alt="" />
            <h4>Best channel to learn coding that help you to become a web developer</h4>
            <h5>Greatstack</h5>
            <p>10K views &bull; 2 days ago</p>
        </Link>
        <Link to={`/video/1/2`} className='card'>
            <img src={thumbnail2} alt="" />
            <h4>Best channel to learn coding that help you to become a web developer</h4>
            <h5>Greatstack</h5>
            <p>10K views &bull; 2 days ago</p>
        </Link>
        <Link to={`/video/1/3`} className='card'>
            <img src={thumbnail3} alt="" />
            <h4>Best channel to learn coding that help you to become a web developer</h4>
            <h5>Greatstack</h5>
            <p>10K views &bull; 2 days ago</p>
        </Link>
        <Link to={`/video/1/4`} className='card'>
            <img src={thumbnail4} alt="" />
            <h4>Best channel to learn coding that help you to become a web developer</h4>
            <h5>Greatstack</h5>
            <p>10K views &bull; 2 days ago</p>
        </Link>
        <Link to={`/video/1/5`} className='card'>
            <img src={thumbnail5} alt="" />
            <h4>Best channel to learn coding that help you to become a web developer</h4>
            <h5>Greatstack</h5>
            <p>10K views &bull; 2 days ago</p>
        </Link>
        <Link to={`/video/1/6`} className='card'>
            <img src={thumbnail6} alt="" />
            <h4>Best channel to learn coding that help you to become a web developer</h4>
            <h5>Greatstack</h5>
            <p>10K views &bull; 2 days ago</p>
        </Link>
        <Link to={`/video/1/7`} className='card'>
            <img src={thumbnail7} alt="" />
            <h4>Best channel to learn coding that help you to become a web developer</h4>
            <h5>Greatstack</h5>
            <p>10K views &bull; 2 days ago</p>
        </Link>
        <Link to={`/video/1/8`} className='card'>
            <img src={thumbnail8} alt="" />
            <h4>Best channel to learn coding that help you to become a web developer</h4>
            <h5>Greatstack</h5>
            <p>10K views &bull; 2 days ago</p>
        </Link>      
        <Link to={`/video/1/9`} className='card'>
            <img src={thumbnail6} alt="" />
            <h4>Best channel to learn coding that help you to become a web developer</h4>
            <h5>Greatstack</h5>
            <p>10K views &bull; 2 days ago</p>
        </Link>
        <Link to={`/video/1/10`} className='card'>
            <img src={thumbnail7} alt="" />
            <h4>Best channel to learn coding that help you to become a web developer</h4>
            <h5>Greatstack</h5>
            <p>10K views &bull; 2 days ago</p>
        </Link>
    </div>
  )
}

export default Feed
