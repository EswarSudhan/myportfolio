// Conbar.js

import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './conbar_sty.css'; // Import your CSS file for styling

const Conbar = () => {
  return (
    <div className="conbar">
      <a href="https://www.linkedin.com/in/skeswarsudhan" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon fontSize="medium" />
      </a>
      <a href="https://github.com/EswarSudhan" target="_blank" rel="noopener noreferrer">
        <GitHubIcon fontSize="medium" />
      </a>
      <a href="mailto:skeswarsudhan@gmail.com">
        <EmailIcon fontSize="medium" />
      </a>
    </div>
  );
};

export default Conbar;
