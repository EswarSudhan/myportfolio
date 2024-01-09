import React, { useEffect, useState } from 'react';

const Datasci = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from project.json or use any other method to fetch data
    // For simplicity, assuming project.json is in the public folder
    fetch(process.env.PUBLIC_URL + '../datasci.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="project-page">
      {projects.map(project => (
        <div key={project.id} className="project-container">
          <div className="image-container">
            <img src={project.imageURL} alt={`Project ${project.id}`} />
          </div>
          <div className="text-container">
            <p>{project.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Datasci;
