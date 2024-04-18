import React from 'react'
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommended from '../../Components/Recommended/Recommended'

const Video = () => {
  return (
    <div className='video-page'>
        <Playvideo />   
        <Recommended />   
    </div>
  )
}

export default Video
