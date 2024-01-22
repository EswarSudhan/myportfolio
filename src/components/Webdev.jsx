import React from 'react';
import './datasci_sty.css';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Webdev = () => {
  const projects = [
    {
      id: 1,
      imageURL: process.env.PUBLIC_URL + './img/passport.JPG',
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

  const imgurl1= process.env.PUBLIC_URL + './img/mern1.jpg'
  const imgurl2= process.env.PUBLIC_URL + './img/portfolio.jpg'

  return (
    <div>
        <div className="navbar">
        <h1 className="navbar-title" onClick={() => redirectToPage("/")}><ArrowBackIosNewIcon/>Back</h1>
    </div>
    <div className="containerdev">
      <div className="image-container">
        <img src={imgurl1} className="image" />
      </div>
      <div className="text-con">
        <p>Project Title: Pharmacy App - MERN Stack</p>
        <p>

Objective:
Developed a comprehensive Pharmacy App using the MERN (MongoDB, Express.js, React, Node.js) stack. The application caters to three distinct user roles: Customer, Admin, and Retailer.
</p>
<p>
Technologies Used:
MERN Stack (MongoDB, Express.js, React, Node.js)
</p>
<p>
Outcome:
A fully functional Pharmacy App that streamlines the buying process for customers, empowers admins with inventory management capabilities, and provides retailers with a convenient way to track and fulfill orders. </p>
      <p>
            <GitHubIcon />
            <span onClick={() => redirectToGitHub("https://github.com/EswarSudhan/Pharmacy-app")}>
              Code of Client
            </span>
          </p>
          <p>
            <GitHubIcon />
            <span onClick={() => redirectToGitHub("https://github.com/EswarSudhan/pharmaapi")}>
              Code of Server
            </span>
          </p>
          </div>
    </div>

    <div className="containerdev">
      <div className="image-container">
        <img src={imgurl2} className="image" />
      </div>
      <div className="text-con">
        <p>"This website was done to show my works to you and in my POV to gain expertise in fullstack domain, I decided to go with the theme "colours" and designed it accordingly using React.js, Hope you like it....." </p>
      <p>
            <GitHubIcon />
            <span onClick={() => redirectToGitHub("https://github.com/EswarSudhan/myportfolio")}>
              Code of Client
            </span>
          </p>
          <p>
            <GitHubIcon />
            <span onClick={() => redirectToGitHub("https://github.com/EswarSudhan/myportfilioapi")}>
              Code of Server
            </span>
          </p>
          </div>
    </div>
    
    </div>
  );
};

export default Webdev;