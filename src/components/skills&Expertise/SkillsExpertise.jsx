import React from 'react';
import './SkillsExpertise.css';
import { Link } from 'react-router-dom';

export const SkillsExpertise = () => {
  const skillAnimationText = [
    'Landing Page',
    'Visual Design',
    'Design System',
    'Story boarding',
    'Landing Page',
    'Visual Design',
    'Design System',
    'Story boarding',
    'Landing Page',
    'Visual Design',
    'Design System',
    'Story boarding',
  ];
  return (
    <div className='skill-and-expertise-container'>
      <div className="skills-container">
        <h1>Skills & Expertise</h1>
        <div className="skill-infinite-animation">
          <div className="skill-infinite-animation-left">
            {skillAnimationText.map((text, index) => (
              <div key={index} className="skill-animation-left-text-container">
                <h3>{text}</h3>
              </div>
            ))}
          </div>
          <div className="skill-infinite-animation-right">
            {skillAnimationText.map((text, index) => (
              <div key={index} className="skill-animation-right-text-container">
                <h3>{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="expertise-container">
        <h2 className='essential-text-heading'>Essential Stacks</h2>
        <p className='essential-text-paragraph'>A Comprehensive Collection of Useful Tools to Support and Optimize My Workflow</p>
        <div className="essential-image-container">
          <Link to="https://www.instagram.com/mr.suraaj_01/" target="_blank"><img src="./images/companyImages/instalogo-removebg-preview.png" alt="" /></Link>
         <Link to="https://www.linkedin.com/in/suraj-mohe-711861246/" target="_blank"><img src="./images/companyImages/linkedin-removebg-preview.png" alt="" /></Link>
          <Link to="https://github.com/surajmohe" target="_blank"><img src="./images/companyImages/githubimages-removebg-preview.png" alt="" /></Link>
          <Link to="https://x.com/MoheSuraj83546" target="_blank"><img src="./images/companyImages/twiiter-removebg-preview.png" alt="" /></Link>
        </div>
      </div>
    </div>
  );
};
