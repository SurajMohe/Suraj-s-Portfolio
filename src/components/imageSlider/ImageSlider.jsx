import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; 

export const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const imagesSlider = [
    'https://framerusercontent.com/images/SfYIdsXNGWV1ULfnwzPfac83GA.jpg?scale-down-to=512',
    'https://framerusercontent.com/images/Xa43MRSJosJ9RtWfrIhjFLwvgs.jpg?scale-down-to=512',
    'https://framerusercontent.com/images/SfYIdsXNGWV1ULfnwzPfac83GA.jpg?scale-down-to=512',
    'https://framerusercontent.com/images/dWULD1WdwRKVBcpxaMwYetfp8I.jpg?scale-down-to=512',
    'https://framerusercontent.com/images/dWULD1WdwRKVBcpxaMwYetfp8I.jpg?scale-down-to=512',
    'https://framerusercontent.com/images/dWULD1WdwRKVBcpxaMwYetfp8I.jpg?scale-down-to=512'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % imagesSlider.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [imagesSlider.length]);

  return (
    <div className="images-slider-main-container">
      <div
        className="wrapper"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }} 
      >
        {imagesSlider.map((image, index) => (
          <img key={index} className="sliding-images" src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

