import React from 'react';
import './VideoEnimation.css';

const VideoEnimation = () => {
  return (
    <div className='video-container'>
      <video className='video' autoPlay loop muted>
        <source src="/images/Recording 2024-04-27 223146.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoEnimation;
