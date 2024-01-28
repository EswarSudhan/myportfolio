
import React, { useState } from 'react';
import './datasci_sty.css';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Modal from 'react-modal';


const Dataana = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageURL) => {

    setSelectedImage(imageURL);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const history = useNavigate();

  const redirectToPage = (pageUrl) => {
    history(pageUrl);
  };

  const redirectToGitHub = (githubUrl) => {
    window.location.href = githubUrl;
  };

  
  
    
  const imgurl1= process.env.PUBLIC_URL + '/img/cov.jpg'

  return (
    <div>
        <div className="navbar">
        <h1 className="navbar-title" onClick={() => redirectToPage("/")}><ArrowBackIosNewIcon/>Back</h1>
    </div>
    <div className="containerana">
    <div className="image-container" onClick={() => handleImageClick(imgurl1)}>
        <img src={imgurl1} className="image" />
      </div>
      <div className="text-con">
        <p>Project Title: Covid-19 Forecasting and Comparative Analysis (Dec 2022 - Jan 2023)</p>

<p>Objective:
To forecast confirmed COVID-19 cases in USA states using Dynamic Mode Decomposition (DMD) and conduct a comparative analysis with other forecasting models such as SARIMAX, ARIMA, and ARMA on time series data.
</p>
<p>
Tools/Technologies Used:
MATLAB, Python (Pandas, Matplotlib, Statsmodel)
</p>
<p>
Outcome:
Successfully achieved a Root Mean Square Value of 969 cases using DMD, showcasing its superior performance compared to other models. The project demonstrates proficiency in utilizing advanced forecasting techniques and provides valuable insights into the strengths of Dynamic Mode Decomposition in predicting COVID-19 trends.</p>
<p>
           
            <span onClick={() => redirectToGitHub("https://github.com/EswarSudhan/Emobot")}>
            <GitHubIcon />
            </span>
          </p>
          </div>
    </div>
    <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <img src={selectedImage} alt="Enlarged" />
      </Modal>
    
    </div>
  );
};

export default Dataana;
