import React from 'react'
import './UserPage.css'
import {Navbar} from '../components/navbar/Navbar'

export const UserPage = () => {
  return (
    <div className='user-main-container'>
          <Navbar/>
        <div className="user-page-text-containner">
          <h3>ABOUT ME</h3>
          <h1>Hey there! I'm Suraj Mohe, a 22-year-old <br/>
          product designer from Bhopal, India. Passionate <br/>about creating user-friendly & visually appealing design.</h1>
          <p>As a seasoned designer, I specialize in visually stunning creations, particularly in the web3 realm.<br/> I thrive on intricate details and enjoy every design challenge that comes my way,</p>
      </div>
      <div className="user-image-enimaation-container">
        
      </div>
    </div>
  )
}
