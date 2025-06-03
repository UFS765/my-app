import React, { useState } from 'react';
import './App.css';

const technologies = [
  {
    id: 1,
    name: 'React',
    logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    description: 'A JavaScript library for building user interfaces.',
    category: 'Frontend'
  },
  {
    id: 2,
    name: 'Node.js',
    logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
    description: 'JavaScript runtime built on Chrome\'s V8 engine.',
    category: 'Backend'
  },
  {
    id: 3,
    name: 'JavaScript',
    logo: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
    description: 'Programming language of the web.',
    category: 'Language'
  },
  {
    id: 4,
    name: 'CSS',
    logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
    description: 'Styling language for web pages.',
    category: 'Styling'
  }
];

function App() {
  const [selectedTech, setSelectedTech] = useState(null);

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