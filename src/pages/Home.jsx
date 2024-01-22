import React from 'react';

import Desc from '../components/Desc';
import CircularImage from '../components/CircularImg'; // Update the path to CircularImage
import TextContainer from '../components/TextContainer';
import Project from '../components/Project';
import Hocon from '../components/Hocon';
import Hocona from '../components/Hocona';
import Hoconb from "../components/Hoconb"
const Home = () => {
  return (
    <div className="App">
      <Desc />
      {/*<CircularImage />*/}
      {/*<TextContainer/>*/}
      <Hocona/>
      <Project/>
      <div className='onecon'>
      <Hocon/>
      <Hoconb/>
      </div>
    </div>
  );
};

export default Home;