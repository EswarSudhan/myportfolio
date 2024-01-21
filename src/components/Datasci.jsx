// ProjectPage.js
import React from 'react';
import './datasci_sty.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



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

  const history = useNavigate();

  const redirectToPage = (pageUrl) => {
    history(pageUrl);}
  
    const redirectToGitHub = (githubUrl) => {
      window.location.href = githubUrl;
    };


  const imgurl1= process.env.PUBLIC_URL + '/img/pho_2.JPG'
  const imgurl2= process.env.PUBLIC_URL + './img/simclr.JPG'

  return (
    <div>

        <div className="navbar" >
          
        
      <h1 className="navbar-title" onClick={() => redirectToPage("/")}><ArrowBackIosNewIcon/>Back</h1>
      
    </div>
   
    <div className="containersci">
      <div className="image-container">
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
      <div className="image-container">
        <img src={imgurl2} className="image" />
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
            <span onClick={() => redirectToGitHub("https://github.com/EswarSudhan/music_genre_classification_simclr")}>
              Code
            </span>
          </p>
      </div>
    </div>
   
    </div>
  );
};

export default Datasci;
