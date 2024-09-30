import React from 'react'
import './FourthPage.css'
import { NavbarButton } from '../../components'

export const FourthPage = () => {
    return (
        <div className='fourth-page-main-container'>
           <div className="foruth-page-div-container">
           <div className="fourth-page-video-container">
           <video autoPlay loop muted src="/images/record.mp4"></video>

            </div>
            <div className="text-and-button-container">
                <h1>Ready to kick start your project <br /> with a touch of magic? </h1>
                <p>Reach out and let's make it happen ✨. <span>I'm also available for
                    full-time or Part-time opportunities to push the boundaries of
                    design and deliver exceptional work.</span>
                </p>
                <NavbarButton buttonText={"Let's Talk 🤩"}/>
            </div>
           </div>
        </div>
    )
}
