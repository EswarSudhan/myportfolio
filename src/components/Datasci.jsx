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
  const imgurl= process.env.PUBLIC_URL + './img/cov.JPG'

  return (
    <div>

        <div className="navbar" >
          
        
      <h1 className="navbar-title" onClick={() => redirectToPage("/")}><ArrowBackIosNewIcon/>Back</h1>
      
    </div>
   
    <div className="containersci">
      <div className="image-container">
        <img src={imgurl} className="image" />
      </div>
      <div className="text-con">
        <p>If you want to enforce a fixed size for the image regardless of its actual dimensions, you can update the CSS styles to set a fixed width and height for the image container. Additionally, you might want to handle the overflow of the image to prevent it from distorting. Here's an updated version of the CSS:
          <GitHubIcon/>
        </p>
      </div>
    </div>
    <div className="containersci">
      <div className="image-container">
        <img src={imgurl} className="image" />
      </div>
      <div className="text-con">
        <p>If you want to enforce a fixed size for the image regardless of its actual dimensions, you can update the CSS styles to set a fixed width and height for the image container. Additionally, you might want to handle the overflow of the image to prevent it from distorting. Here's an updated version of the CSS:</p>
      </div>
    </div>
    <div className="containersci">
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

export default Datasci;
