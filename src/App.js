import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Datascience from "./pages/Datascience";
const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Datascience />} />
        
      </Routes>
    </Router>
  );
};

export default App;