import React from 'react';
import './Experience.css';

export const Experience = ({ experienceDetails = [], companyArray = [], showCompanyImages = true }) => {
    return (
        <div className='experience-container'>
            <div className="experience-container-part1">
                <div className='experience-text-and-year-container'>
                    <h2>Experience</h2>
                    <div className='year'>04 Years</div>
                </div>

                {/* Map through experienceDetails to render the product-date-container */}
                <div className='product-and-date-main-container'>
                    {experienceDetails.map((experience, index) => (
                        <div className="product-date-container" key={index}>
                            <div className="network-trace-dot">
                                <div className={`dot-line ${index > 0 ? 'dot-line-second' : ''}`}></div>
                                <div className="trace"></div>
                            </div>
                            <h3>{experience.company} <br /> <span>{experience.role}</span></h3>
                            <h4>{experience.date}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conditionally render the company images section based on the prop */}
            {showCompanyImages && (
                <div className="experience-container-part2">
                    <div className='company-text'>
                        <h3>Companies I Worked With</h3>
                    </div>
                    <div className='company-images-container'>
                        {companyArray.map((imageSrc, index) => (
                            <img key={`company-img-${index}`} src={imageSrc} alt={`Company ${index + 1}`} className='company-image' />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
