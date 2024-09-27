import React from 'react';
import { UserEducationData } from './UserEducationData';
import './UserEducation.css';

export const UserEducation = () => {
  return (
    <div className='user-education-container'>
      <h2 className='education-heading'>Education</h2>
      {UserEducationData.map((education, index) => (
        <div key={index} className='education-detail-container'>
          <h3 className='course-name-heading'>{education.courseName}</h3>
          <h4 className='college-name-heading'>{education.collegePlace}</h4>
          <h5 className='year-heading'>{education.year}</h5>
        </div>
      ))}
    </div>
  );
};
