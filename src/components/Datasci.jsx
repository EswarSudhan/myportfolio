

import React, { useState } from 'react';
import './datasci_sty.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Modal from 'react-modal';



const Datasci = () => {
  const projects = [
    {
      id: 1,
      imageURL: process.env.PUBLIC_URL + '../img/passport.JPG',
      text: 'Text content for Project 1',
    },
    {
      id: 2,
      imageURL: 'https://example.com/image2.jpg',
      text: 'Text content for Project 2',
    },
    // Add more projects as needed

  ];

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


  const imgurl1= process.env.PUBLIC_URL + './img/emobot.jpg'
  const imgurl2= process.env.PUBLIC_URL + './img/simclr.jpg'

  

  return (
    <div>

        <div className="navbar" > 
          
        
      <h1 className="navbar-title" onClick={() => redirectToPage("/")}><ArrowBackIosNewIcon/>Back</h1>
      
    </div>
   
    <div className="containersci">
    <div className="image-container" onClick={() => handleImageClick(imgurl1)}>
        <img src={imgurl1} className="image" />
      </div>
      <div className="text-con">
        <p>Project Title: Enhanced Chatbot with Facial Emotion Recognition (May 2023 - June 2023)</p>
        <p>

Objective:
To develop an intelligent chatbot incorporating Facial Emotion Recognition to assess user satisfaction with responses. The chatbot adapts and refines answers based on the user's facial expressions.
</p><p>
Tools/Technologies Used:
Langchain, Tensorflow, OpenCV, Streamlit
</p><p>
Outcome:
Implemented a responsive chatbot system where user satisfaction is gauged through facial emotion analysis. Leveraging Langchain, answers were dynamically reframed by the chatbot, showcasing an innovative approach to improving user interaction. Explore this project to witness how cutting-edge technologies can elevate conversational AI, creating a more personalized and engaging user experience.
          
        </p>
        <p>
            <GitHubIcon />
            <span onClick={() => redirectToGitHub("https://github.com/EswarSudhan/Emobot")}>
              Code
            </span>
          </p>
      </div>
    </div>
    <div className="containersci">
    <div className="image-container" onClick={() => handleImageClick(imgurl2)}>
        <img src={imgurl2} className="image" />
      </div>
      <div className="text-con">
        <p>Project Title: Music genre classification using simclr (May 2023 - June 2023)</p>
        <p>

Objective:
To Classify music genre of songs using simclr(Contrastive Learning) in unsupervised manner.
</p><p>
Tools/Technologies Used:
Tensorflow, Pytorch, Lambda Labs
</p><p>
Outcome:
Implemented a simclr model that classifies music genre with 40% accuracy which is just behind state of the art accuracy 51% considering unsupervised approach.Pytoch audio was used to extract melspectrogram of the song and Lambda labs was used to train GPU  intensive training
          
        </p>
       
        <p>
            <GitHubIcon />
            <span onClick={() => redirectToGitHub("https://github.com/EswarSudhan/music_genre_classification_simclr")}>
              Code
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

export default Datasci;   
