import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Datascience from "./pages/Datascience";
import Dataanalysis from "./pages/Dataanalysis";
import Computervision from "./pages/Computervision";
import Webdevelopment from "./pages/Webdevelopment";
const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/computervision" element={<Computervision />} />
        <Route path="/datascience" element={<Datascience />} />
        <Route path="/dataanalysis" element={<Dataanalysis />} />
        <Route path="/webdevelopment" element={<Webdevelopment />} />
        
      </Routes>
    </Router>
  );
};

export default App;