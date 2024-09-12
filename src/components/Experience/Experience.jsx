import React from 'react';
import './Experience.css';

export const Experience = () => {
    const companyArray = [
        './images/companyImages/asva.webp',
        './images/companyImages/mriai.webp',
        './images/companyImages/pixeto.png',
        './images/companyImages/trace.png',
        './images/companyImages/asva.webp',
        './images/companyImages/mriai.webp',
        './images/companyImages/pixeto.png',
        './images/companyImages/trace.png',
        './images/companyImages/mriai.webp',
        './images/companyImages/pixeto.png',
        './images/companyImages/trace.png',
        './images/companyImages/asva.webp',
        './images/companyImages/mriai.webp',
        './images/companyImages/pixeto.png',
        './images/companyImages/trace.png',
        './images/companyImages/asva.webp',
        './images/companyImages/mriai.webp',
        './images/companyImages/pixeto.png',
        './images/companyImages/trace.png',
        './images/companyImages/mriai.webp',
        './images/companyImages/pixeto.png',
        './images/companyImages/trace.png',
        './images/companyImages/asva.webp',
        './images/companyImages/mriai.webp',
        './images/companyImages/pixeto.png',
        './images/companyImages/trace.png',
        './images/companyImages/asva.webp',
        './images/companyImages/mriai.webp',
        './images/companyImages/pixeto.png',
        './images/companyImages/trace.png',
        './images/companyImages/mriai.webp',
        './images/companyImages/pixeto.png',
        './images/companyImages/trace.png',
        './images/companyImages/asva.webp',
        './images/companyImages/mriai.webp',
        './images/companyImages/pixeto.png',
        './images/companyImages/trace.png',
       
    ];

    return (
        <div className='experience-container'>
            <div className="experience-container-part1">
                <div className='experience-text-and-year-container'>
                    <h2>Experience</h2>
                    <div className='year'>04 Year</div>
                </div>
                <div className='product-and-date-main-container'>
                    <div className="product-date-container">
                        <div className="network-trace-dot">
                            <div className="dot-line"></div>
                            <div className="trace"></div>
                        </div>
                        <h3>Trace Network Labs <br /> <span>Product Designer · Full-time</span></h3>
                        <h4>2022-23</h4>
                    </div>
                    <div className="product-date-container">
                        <div className="network-trace-dot">
                            <div className="dot-line dot-line-second"></div>
                            <div className="trace"></div>
                        </div>
                        <h3>EasyFi Network <br /> <span>Product Designer · Full-time</span></h3>
                        <h4>2020-22</h4>
                    </div>
                    <div className="product-date-container">
                        <div className="network-trace-dot">
                            <div className="dot-line dot-line-second"></div>
                            <div className="trace"></div>
                        </div>
                        <h3>Spherium Finance  <br /> <span>UI/UX Designer · Consultant</span></h3>
                        <h4>2020-21</h4>
                    </div>
                </div>
            </div>

            <div className="experience-container-part2">
                <div className='company-text'>
                    <h3>Company I Worked With</h3>
                </div>
                <div className='company-images-container'>
                    {companyArray.map((imageSrc, index) => (
                        <img key={index} src={imageSrc} alt={`Company ${index + 1}`} className='company-image' />
                    ))}
                </div>
            </div>
        </div>
    );
};
