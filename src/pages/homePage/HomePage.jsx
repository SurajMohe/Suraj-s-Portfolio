import React from 'react';
import './HomePage.css';
import Navbar from '../../components/navbar/Navbar';
import {VideoEnimation} from '../../components/videoEnimation/VideoEnimation';

export const HomePage = () => {
  return (
    <div className='home-page-container'>
      <Navbar />
      <div className='text-and-video-container'>
        <div className="text-container">
          <h4>Hey there!</h4>
          <h1>
            I'm Suraj, a product designer
            <br />
            crafting user-centric design with
            <br />
            pixel-perfect precision.
          </h1>
          <h3>
            <div className="dot"></div> Available for FreelancingKolkata, IND • UTC/GMT +5:30
          </h3>
        </div>
        <div className='home-video-container'><VideoEnimation/></div>
      </div>
    </div>
  );
};
