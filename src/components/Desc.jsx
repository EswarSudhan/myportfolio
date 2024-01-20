// Desc.js

import React from 'react';
import './desc_sty.css';

const Desc = () => {
  const imgUrl = process.env.PUBLIC_URL + '/img/DSC05232_a1.JPG';
  const circularImgUrl = process.env.PUBLIC_URL + '/img/DSC06059.JPG'; // Replace with the actual circular image URL

  return (
    <div className="con">
      <div className="image-con">
        <img className="background-image" src={imgUrl} alt="Background" />
        <div className="text-container">
          <h1>"Hello, I'm Eswar Sudhan,</h1>
          <h2> a B.Tech Artificial Intelligence Engineering student at Amrita Vishwa Vidyapeetham. Proficient in Machine Learning and Deep Learning, I'm currently delving into Full Stack Web Development. My journey is a blend of academic rigor and practical application, showcasing expertise in AI and a growing proficiency in web development. Join me as I navigate the realms of technology, blending precision with innovation. Welcome to my portfolio!"</h2>
        <h1>"</h1>
        </div>
        <div className="circular-image">
          <img src={circularImgUrl} alt="Circular Image" />
        </div>
        
      </div>
    </div>
  );
};

export default Desc;
