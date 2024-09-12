import React from 'react'
import './ConnectCompenet.css'
import { Link } from 'react-router-dom'
export const ConnectComponent = () => {
    return (
        <div className='Connect-main-container'>
            <div className="connect-heading">
                <h2>Connect</h2>
            </div>
            <div className="media-container">
                <div className="logo-text-container">
                    <i class="ri-linkedin-box-fill"></i>
                    <h3>LinkedIn</h3>
                </div>
                <div className="logo-text-container">
                    <i class="ri-twitter-x-line"></i>
                    <h3>X XPrevious Twitter</h3>
                </div>
                <div className="logo-text-container">
                    <i class="ri-telegram-fill"></i>
                    <h3>Telegram</h3>
                </div>
                <div className="logo-text-container">
                    <i class="ri-instagram-fill"></i>
                    <h3>Instagram</h3>
                </div>
            </div>
            <div className="email-container">
                <div className="handshake-image-container"></div>
                <div className="handshake-email-text-container">
                    <h4>Let's Work Togather!</h4>
                    <h3>send Email <Link to="surajmohe01@gmail.com">surajmohe01@gmail.com</Link> </h3>
                </div>
            </div>
        </div>
    )
}
