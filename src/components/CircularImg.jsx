import React from 'react';
import './cirimg_sty.css'; // Import your CSS file

const CircularImage = () => {
  const imageUrl = process.env.PUBLIC_URL + './img/DSC05231.JPG'; // Update with your image

  return (
    <div className="circular-container">
      <div className="circular-image">
        <img src={imageUrl} alt="Circular Background" />
      </div>
    </div>
  );
};

export default CircularImage;
