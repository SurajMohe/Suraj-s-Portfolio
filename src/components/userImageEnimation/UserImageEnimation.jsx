import React from 'react'
import './UserImageEnimation.css'
 export const UserImageEnimation = () => {
  const images = [
   "./images/enimationImages/img7.avif",
   "./images/enimationImages/img8.avif",
   "./images/enimationImages/img9.avif",
   "./images/enimationImages/img10.avif",
   "./images/enimationImages/img11.avif",
  ];
  return (
    <div id="cntr-p1">
      {images.map((src, index) => (
        <div id="img" key={index}>
          <img src={src} alt={`image-${index}`} />
        </div>
      ))}
    </div>
  );
}
