// ProjectPage.js
import React from 'react';
import './datasci_sty.css';


const Dataana = () => {
  
    
  const imgurl= process.env.PUBLIC_URL + './img/DSC05230.JPG'

  return (
    <div>
        <div className="navbar">
      <h1 className="navbar-title">Your Title</h1>
    </div>
    <div className="containerana">
      <div className="image-container">
        <img src={imgurl} className="image" />
      </div>
      <div className="text-con">
        <p>If you want to enforce a fixed size for the image regardless of its actual dimensions, you can update the CSS styles to set a fixed width and height for the image container. Additionally, you might want to handle the overflow of the image to prevent it from distorting. Here's an updated version of the CSS:</p>
      </div>
    </div>
    <div className="containerana">
      <div className="image-container">
        <img src={imgurl} className="image" />
      </div>
      <div className="text-con">
        <p>If you want to enforce a fixed size for the image regardless of its actual dimensions, you can update the CSS styles to set a fixed width and height for the image container. Additionally, you might want to handle the overflow of the image to prevent it from distorting. Here's an updated version of the CSS:</p>
      </div>
    </div>
    <div className="containerana">
      <div className="image-container">
        <img src={imgurl} className="image" />
      </div>
      <div className="text-con">
        <p>If you want to enforce a fixed size for the image regardless of its actual dimensions, you can update the CSS styles to set a fixed width and height for the image container. Additionally, you might want to handle the overflow of the image to prevent it from distorting. Here's an updated version of the CSS:</p>
      </div>
    </div>
    </div>
  );
};

export default Dataana;
