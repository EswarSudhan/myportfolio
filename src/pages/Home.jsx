import React from 'react';

import Desc from '../components/Desc';
import CircularImage from '../components/CircularImg'; // Update the path to CircularImage
import TextContainer from '../components/TextContainer';
import Project from '../components/Project';
const Home = () => {
  return (
    <div className="App">
      <Desc />
      <CircularImage />
      {/*<TextContainer/>*/}
      <Project/>
    </div>
  );
};

export default Home;