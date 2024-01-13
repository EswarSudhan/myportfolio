import React from 'react';

import Desc from '../myportfolio/components/Desc';
import CircularImage from '../components/CircularImg'; // Update the path to CircularImage
import TextContainer from '../components/TextContainer';
import Project from '../components/Project';
import Hocon from '../components/Hocon';
const Home = () => {
  return (
    <div className="App">
      <Desc />
      {/*<CircularImage />*/}
      {/*<TextContainer/>*/}
      <Project/>
      <Hocon/>
    </div>
  );
};

export default Home;