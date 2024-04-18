import React from 'react'
import thumbnail1 from '../../Assets/assets/thumbnail1.png'
import thumbnail2 from '../../Assets/assets/thumbnail2.png'
import thumbnail3 from '../../Assets/assets/thumbnail3.png'
import thumbnail4 from '../../Assets/assets/thumbnail4.png'
import thumbnail5 from '../../Assets/assets/thumbnail5.png'
import thumbnail6 from '../../Assets/assets/thumbnail6.png'
import thumbnail7 from '../../Assets/assets/thumbnail7.png'
import thumbnail8 from '../../Assets/assets/thumbnail8.png'
import './Recommended.css'
import { Link } from 'react-scroll'

const Recommended = () => {
  return (
    <div className='recommendation'>
        <Link to='video' smooth={true} duration={500} offset={-120} className='recom-video'>
            <img src={thumbnail1} alt="" />
            <div className='recom-video-content'>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et?</h5>
                <p>Youtube</p>
                <p>100K views</p>
            </div>
        </Link>

        <Link to='video' smooth={true} duration={500} offset={-120} className='recom-video'>
            <img src={thumbnail2} alt="" />
            <div className='recom-video-content'>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et?</h5>
                <p>Youtube</p>
                <p>100K views</p>
            </div>
        </Link>

        <Link to='video' smooth={true} duration={500} offset={-120} className='recom-video'>
            <img src={thumbnail3} alt="" />
            <div className='recom-video-content'>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et?</h5>
                <p>Youtube</p>
                <p>100K views</p>
            </div>
        </Link>

        <Link to='video' smooth={true} duration={500} offset={-120} className='recom-video'>
            <img src={thumbnail4} alt="" />
            <div className='recom-video-content'>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et?</h5>
                <p>Youtube</p>
                <p>100K views</p>
            </div>
        </Link>

        <Link to='video' smooth={true} duration={500} offset={-120} className='recom-video'>
            <img src={thumbnail5} alt="" />
            <div className='recom-video-content'>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et?</h5>
                <p>Youtube</p>
                <p>100K views</p>
            </div>
        </Link>

        <Link to='video' smooth={true} duration={500} offset={-120} className='recom-video'>
            <img src={thumbnail6} alt="" />
            <div className='recom-video-content'>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et?</h5>
                <p>Youtube</p>
                <p>100K views</p>
            </div>
        </Link>

        <Link to='video' smooth={true} duration={500} offset={-120} className='recom-video'>
            <img src={thumbnail7} alt="" />
            <div className='recom-video-content'>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et?</h5>
                <p>Youtube</p>
                <p>100K views</p>
            </div>
        </Link>

        <Link to='video' smooth={true} duration={500} offset={-120} className='recom-video'>
            <img src={thumbnail8} alt="" />
            <div className='recom-video-content'>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, et?</h5>
                <p>Youtube</p>
                <p>100K views</p>
            </div>
        </Link>      
    </div>
  )
}

export default Recommended
