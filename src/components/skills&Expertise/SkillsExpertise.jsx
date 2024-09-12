import React from 'react';
import './SkillsExpertise.css';

export const SkillsExpertise = () => {
  const skillAnimationText = [
    'Landing Page',
    'Visual Design',
    'Design System',
    'Storyboarding',
    'Landing Page',
    'Visual Design',
    'Design System',
    'Storyboarding',
    'Landing Page',
    'Visual Design',
    'Design System',
    'Storyboarding',
  ];

  return (
    <div className='skill-and-expertise-container'>
      <div className="skills-container">
        <h1>Skills & Expertise</h1>
        <div className="skill-infinite-animation">
          <div className="skill-infinite-animation-left">
              {skillAnimationText.map((text, index) => (
            <div key={index} className="skill-animation-left-text-container">
                  {text}
            </div>
              ))}
          </div>
          <div className="skill-infinite-animation-right"></div>
        </div>
      </div>
        <div className="expertise-container"></div>
    </div>
  );
};
