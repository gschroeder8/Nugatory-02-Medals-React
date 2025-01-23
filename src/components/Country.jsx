import React, { useState } from 'react';

function Country() {
  const [name] = useState('United States');
  const [gold, setGold] = useState(0);

  const handleClick = () => {
    setGold((prevGold) => prevGold + 1);
  };

  return (
    <div className="country-card">
      <h2 className="border-bottom pb-1">{name}</h2>
      <p>Gold Medals: {gold}</p>
      <button className="mb-1" onClick={handleClick}>+</button>
    </div>
  );
}

export default Country;
