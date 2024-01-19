import React from 'react';
import './datasci_sty.css';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Compvis = () => {

  const history = useNavigate();

  const redirectToPage = (pageUrl) => {
    history(pageUrl);}
  
  const imgurl1= process.env.PUBLIC_URL + './img/dct.JPG';
  const imgurl2= process.env.PUBLIC_URL + './img/imgdeh.JPG'

  return (
    <div>
        <div className="navbar">
        <h1 className="navbar-title" onClick={() => redirectToPage("/")}><ArrowBackIosNewIcon/>Back</h1>
    </div>
    <div className="containervis">
      <div className="image-container">
        <img src={imgurl1} className="image" />
      </div>
      <div className="text-con">
        <p>Project Title: JPEG Image Compression using DCT in MATLAB</p>
        <p>

Objective:
Implemented a JPEG image compression system using Discrete Cosine Transform (DCT) in MATLAB. The primary goal was to achieve efficient compression by converting color images to grayscale and applying 2D DCT on it .
</p>
<p>
Tools/Technologies Used:
MATLAB
</p>
<p>

Outcome:
Successfully developed an image compression algorithm using DCT, optimizing color images into grayscale with a compression rate of 20%. The project showcases proficiency in MATLAB and a deep understanding of image processing techniques.</p>
      </div>
    </div>

    
    <div className="containervis">
      <div className="image-container">
        <img src={imgurl2} className="image" />
      </div>
      <div className="text-con">
        <p>Project Title: Remote Sensing Image Dehazing (Dec 2022 - Jan 2023)</p>
        <p>

Objective:
The project aimed to dehaze remote sensing images by employing the Dark Channel Prior (DCP) technique, transforming hazy images into vibrant, saturated representations. Additionally, the objective included quantifying the amount of haze present in the original images.
</p>
<p>
Tools/Techniques Used:
Python (Numpy, Matplotlib), Photoshop
</p>
<p>
Outcome:
By introducing random masks to simulate various atmospheric conditions, the project successfully applied the Dehazing algorithm based on Dark Channel Prior to enhance remote sensing images. The dehazed images were then quantified by measuring the Euclidean distance, providing a clear metric for the amount of haze removed.</p>
      </div>
    </div>
   
    </div>
  );
};

export default Compvis;
