import React from 'react'
import './Playvideo.css'
import video from '../../Assets/assets/video.mp4'
import like from '../../Assets/assets/like.png'
import dislike from '../../Assets/assets/dislike.png'
import share from '../../Assets/assets/share.png'
import save from '../../Assets/assets/save.png'
import huzaifa from '../../Assets/assets/huzaifa.jpg'
import user from '../../Assets/assets/user_profile.jpg'

const Playvideo = () => {
  return (
    <div className='play-video'>
        <video src={video} className='video' controls muted autoPlay />
        <h3>Best youtube channel to learn web development</h3>
        <div className='vid-features'>
            <p>153K views &bull; 2 days ago </p>
            <div className='right-features'>
                <div className='icon-title'>
                    <img src={like} alt="" />
                    <p>122</p>
                </div>
                <div className='icon-title'>
                    <img src={dislike} alt="" />
                    <p>2</p>
                </div>
                <div className='icon-title'>
                    <img src={share} alt="" />
                    <p>Share</p>
                </div>
                <div className='icon-title'>
                    <img src={save} alt="" />
                    <p>Save</p>
                </div>
            </div>
        </div>
        <hr />
        <div className='channel-subscribe'>
            <div className='pic-subscribers'>
                <img src={huzaifa} alt="" />
                <div className='subscribe-text'>
                    <h4>Youtube</h4>
                    <p>1M Subscribers</p>
                </div>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='desc-comments'>
            <p>Channel that makes it learning easy <br />Subscribe this channel to watch more tutorials on web development.</p>
            <hr />
            <div className='no-comments'>
                <p>130 Comments</p>
            </div>

            <div className='comments'>
                <div className='comment'>
                    <img src={user} className='admin' alt="" />
                    <div className='comment-content'>
                        <div className='name-time'>
                            <h5>Huzaifa Ali</h5>
                            <p>1 day ago.</p>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptatum voluptatibus illum dolore vel eaque!</p>
                        <div className='like-dislike'>
                            <div className='likes'>
                                <img src={like} alt="" />
                                <p>20</p>
                            </div>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>

                <div className='comment'>
                    <img src={user} className='admin' alt="" />
                    <div className='comment-content'>
                        <div className='name-time'>
                            <h5>Huzaifa Ali</h5>
                            <p>1 day ago.</p>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptatum voluptatibus illum dolore vel eaque!</p>
                        <div className='like-dislike'>
                            <div className='likes'>
                                <img src={like} alt="" />
                                <p>20</p>
                            </div>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>

                <div className='comment'>
                    <img src={user} className='admin' alt="" />
                    <div className='comment-content'>
                        <div className='name-time'>
                            <h5>Huzaifa Ali</h5>
                            <p>1 day ago.</p>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptatum voluptatibus illum dolore vel eaque!</p>
                        <div className='like-dislike'>
                            <div className='likes'>
                                <img src={like} alt="" />
                                <p>20</p>
                            </div>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>

                <div className='comment'>
                    <img src={user} className='admin' alt="" />
                    <div className='comment-content'>
                        <div className='name-time'>
                            <h5>Huzaifa Ali</h5>
                            <p>1 day ago.</p>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptatum voluptatibus illum dolore vel eaque!</p>
                        <div className='like-dislike'>
                            <div className='likes'>
                                <img src={like} alt="" />
                                <p>20</p>
                            </div>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>

                <div className='comment'>
                    <img src={user} className='admin' alt="" />
                    <div className='comment-content'>
                        <div className='name-time'>
                            <h5>Huzaifa Ali</h5>
                            <p>1 day ago.</p>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptatum voluptatibus illum dolore vel eaque!</p>
                        <div className='like-dislike'>
                            <div className='likes'>
                                <img src={like} alt="" />
                                <p>20</p>
                            </div>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Playvideo
