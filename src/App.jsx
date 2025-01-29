import React, { useState } from 'react';
import Country from './components/Country';
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 1 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 5 },
  ]);

  const handleDelete = (id) => {
    setCountries(countries.filter((country) => country.id !== id));
  };

  return (
    <div className="medals">
      {countries.map((country) => (
        <Country 
          key={country.id} 
          country={country} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
}

export default App;
