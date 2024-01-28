
import React, { useState } from 'react';
import './datasci_sty.css';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Modal from 'react-modal';


const Compvis = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageURL) => {

    setSelectedImage(imageURL);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);};

  const history = useNavigate();

  const redirectToPage = (pageUrl) => {
    history(pageUrl);}

    const redirectToGitHub = (githubUrl) => {
      window.location.href = githubUrl;
    };

  
  const imgurl1= process.env.PUBLIC_URL + './img/dct.jpg';
  const imgurl2= process.env.PUBLIC_URL + './img/imgdeh.jpg'

  return (
    <div>
        <div className="navbar">
        <h1 className="navbar-title" onClick={() => redirectToPage("/")}><ArrowBackIosNewIcon/>Back</h1>
    </div>
    <div className="containervis">
    <div className="image-container" onClick={() => handleImageClick(imgurl1)}>
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
<p>
          
            <span onClick={() => redirectToGitHub("https://github.com/EswarSudhan/Image_compression_using_DCT")}>
            <GitHubIcon />
            </span>
          </p> </div>
    </div>

    
    <div className="containervis">
      <div className="image-container" onClick={() => handleImageClick(imgurl2)}>
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
<p>
           
            <span onClick={() => redirectToGitHub("https://github.com/EswarSudhan/image_dehazing")}>
            <GitHubIcon />
            </span>
          </p> </div>
    </div>
    <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <img src={selectedImage} alt="Enlarged" />
      </Modal>
   
    </div>
  );
};

export default Compvis;
