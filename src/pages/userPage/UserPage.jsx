import React from 'react';
import './UserPage.css';
import { FourthPage } from '../fourthPage/FourthPage'
import { Experience, ExperienceDetailsmore, ImageSlider, Navbar, Resume, UserDownImageAnimation, UserEducation, UserImageEnimation } from '../../components';


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
        <Experience experienceDetails={ExperienceDetailsmore} showCompanyImages={false} containerClassName='user-experience-container' />
        <div className="user-education-and-resume-container">
          <UserEducation />
          <Resume />
        </div>
      </div>
      <div className="music-and-photo-slider-main-container">
        <div className="musics-main-container">
          <h1 className='vibe-hustling-heading'>Vibe while hustling 🎧</h1>
          <div className="spotify-main-container">
            <iframe
              src="https://open.spotify.com/embed/playlist/11s2lGT8TieyBqlcAJx4xL?theme=1"
              title="Spotify Playlist" // Added title attribute
              frameBorder="0"
            ></iframe>
              <iframe
              src="https://open.spotify.com/embed/playlist/3W8HSXipXEvxKXj4IGteIO?theme=1"
              title="Spotify Playlist" // Added title attribute
              frameBorder="0"
            ></iframe>

          </div>
        </div>
        <div className="slider-main-container">
          <h1 className='work-place-heading'>WorkPlace Snap 📸</h1>
          <ImageSlider />
        </div>
      </div>
      <FourthPage />
    </div>
  );
};
