import React from 'react';
import './UserPage.css';
import { Navbar } from '../components/navbar/Navbar';
import { UserImageEnimation } from '../components/userImageEnimation/UserImageEnimation';
import { UserDownImageAnimation } from '../components/userDownImageAnimation/UserDownImageAnimation';
import {Experience} from "../components/Experience/Experience"

export const UserPage = () => {
  return (
    <div className='user-main-container'>
      <Navbar />
      <div className="user-page-text-containner">
        <h3>ABOUT ME</h3>
        <h1>
          Hey there! I'm Suraj Mohe, a 22-year-old <br />
          product designer from Bhopal, India. Passionate <br />
          about creating user-friendly & visually appealing design.
        </h1>
        <p>
          As a seasoned designer, I specialize in visually stunning creations, particularly in the web3 realm. <br />
          I thrive on intricate details and enjoy every design challenge that comes my way.
        </p>
      </div>
      <div className="user-image-enimation-container">
        <UserImageEnimation />
        <UserDownImageAnimation />
        <UserImageEnimation />
      </div>
      <div className='user-page-college-design'>
        <h3>I got my start in design during my college days, creating funky posters and cringy photo edits for friends. The fun I had doing that motivated me, and I've been loving design ever since.</h3>
        <p>I do more than just design – I've worked on ads and love creating videos. When I'm not busy, you'll find me sculpting, traveling, filming, or playing badminton.</p>
      </div>
      <div className='user-education-experience-resume-main-container'>
        <Experience showCompanyImages={false} />
      </div>
    </div>
  );
};
