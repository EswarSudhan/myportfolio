import React from 'react';
import { useNavigate } from 'react-router-dom';
import './project_sty.css'; // Import your CSS file
import jsonData from '../data.json'; // Import your data file

const DynamicContainer = () => {
  const history = useNavigate();

  const redirectToPage = (pageUrl) => {
    history(pageUrl);
  };

  return (
    <div className="dynamic-container">
      {jsonData.map((data, index) => (
        <div
          key={index}
          className="document-container"
          style={{ backgroundImage: process.env.PUBLIC_URL+`url(${data.imageURL})` }}
          onClick={() => redirectToPage(data.link)}
        >
          <div className="overlay">
            <p>{data.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicContainer;
