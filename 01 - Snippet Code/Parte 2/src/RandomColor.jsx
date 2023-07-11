// AQUÍ VA TU COMPONENTE
// ¡No olvides exportarlo!
import React from 'react';
import { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor(
      `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`
    );
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          width: '200px',
          height: '200px',
          borderRadius: '50%',
        }}
      ></div>
      <button onClick={handleClick}>Change color</button>
    </div>
  );
}

export default RandomColor;

