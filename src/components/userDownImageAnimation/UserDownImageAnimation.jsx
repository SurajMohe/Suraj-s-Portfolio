import React from 'react'
import "./UserDownImageAnimation.css"

export const UserDownImageAnimation = () => {
    const images = [
       "./images/enimationImages/img1.avif",
       "./images/enimationImages/img2.avif",
       "./images/enimationImages/img3.avif",
       "./images/enimationImages/img4.avif",
       "./images/enimationImages/img5.avif",
      ];
  return (
    <div id="cntr-p2">
      {images.map((src, index) => (
        <div id="img" key={index}>
          <img src={src} alt={`image-${index}`} />
        </div>
      ))}
    </div>
  )
}
