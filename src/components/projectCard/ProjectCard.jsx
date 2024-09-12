import React from 'react';
import './ProjectCard.css';

export const ProjectCard = ({ imageUrl, title, category, date }) => {
  return (
    <div className='project-card-container'>
        <div className="image-container">
            <img src={imageUrl} alt={""} />
        </div>
        <div className="image-text-container">
            <div className="img-text-heading-container">
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
            <div className="img-text-paragraph-container">
                <h4>{date}</h4>
            </div>
        </div>
    </div>
  );
};
