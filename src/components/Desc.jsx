import React from 'react';
import './desc_sty.css'; // Import your CSS file

const Desc = () => {
    const imgUrl=process.env.PUBLIC_URL + './img/DSC05232_a.JPG';
  return (
    <div className="container">
      <div className="image-container">
        <img
          className="background-image"
          src = {imgUrl}
          alt="Background"
        />
        <div className="text-container">
          <h1>Your Text Here </h1>
        </div>
      </div>
    </div>
  );
};

export default Desc;
