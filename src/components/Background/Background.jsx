import React from 'react';
import './Background.css';
import video1 from '../../assets/video.mp4';
import image1 from '../../assets/Graphics.jpg'; // ✅ Sirf ek image use ho rahi hai

const Background = ({ playStatus }) => {
  return (
    <div className='background-container'>
      {playStatus ? (
        <video className='background' autoPlay loop muted>
          <source src={video1} type='video/mp4' />
        </video>
      ) : (
        <img src={image1} className='background' alt="" />
      )}
    </div>
  );
};

export default Background;
