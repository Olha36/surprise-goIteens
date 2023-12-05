import React, { MouseEvent }from 'react';

export default function nastiia() {

  
  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>Nastiia</h1>
      <button onClick={handleMouseEvent}>Повернутися на головну сторінку</button>
    </div>
  )
}