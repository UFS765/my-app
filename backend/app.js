import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedTech, setSelectedTech] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/technologies')
      .then(res => res.json())
      .then(data => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="app">Loading...</div>;

  return (
    <div className="app">
      <h1>Tech Stack</h1>
      <div className="tiles">
        {technologies.map(tech => (
          <div 
            key={tech.id} 
            className="tile"
            onClick={() => setSelectedTech(tech)}
          >
            <img 
              src={tech.logo} 
              alt={tech.name} 
              onError={(e) => e.target.src = 'https://via.placeholder.com/100?text='+tech.name}
            />
            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>

      {selectedTech && (
        <div className="modal" onClick={() => setSelectedTech(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedTech(null)}>X</button>
            <img 
              src={selectedTech.logo} 
              alt={selectedTech.name}
              onError={(e) => e.target.src = 'https://via.placeholder.com/200?text='+selectedTech.name}
            />
            <h2>{selectedTech.name}</h2>
            <p><em>{selectedTech.category}</em></p>
            <p>{selectedTech.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;