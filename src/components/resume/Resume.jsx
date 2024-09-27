import React from 'react';
import './Resume.css';

export const Resume = () => {
  const handleOnClickResume = () => {
    const link = document.createElement('a');
    link.href = './images/resumeImages/SURAJ MOHE (1).pdf'; 
    link.download = 'SURAJ MOHE (1).pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='user-resume-container'>
      <h1 className='resume-heading'>Resume</h1>
      <img onClick={handleOnClickResume} className='resume-img' src="./images/resumeImages/reumeImage.avif" alt="Resume" />
    </div>
  );
};
