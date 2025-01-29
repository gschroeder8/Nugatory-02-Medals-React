import React, { useState } from 'react';

function Country({ country, onDelete }) {
  return (
    <div className="country-card">
      <h2 className="border-bottom pb-1">{country.name}</h2>
      <p>Gold Medals: {country.gold}</p>
      <button className="mb-1" onClick={() => onDelete(country.id)}>🗑️</button>
    </div>
  );
}

export default Country;