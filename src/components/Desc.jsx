// Desc.js

import React from 'react';
import './desc_sty.css';

const Desc = () => {
  const imgUrl = process.env.PUBLIC_URL + '/img/DSC05232_a.JPG';
  const circularImgUrl = process.env.PUBLIC_URL + '/img/DSC05232_a.JPG'; // Replace with the actual circular image URL

  return (
    <div className="con">
      <div className="image-con">
        <img className="background-image" src={imgUrl} alt="Background" />
        <div className="text-container">
          <h1>Your Text Here</h1>
        </div>
        <div className="circular-image">
          <img src={circularImgUrl} alt="Circular Image" />
        </div>
      </div>
    </div>
  );
};

export default Desc;
