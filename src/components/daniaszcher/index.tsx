import React, { MouseEvent }from 'react';

export default function dania1() {

  
  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>Dania Shcher</h1>
      <button onClick={handleMouseEvent}>Повернутися на головну сторінку</button>
    </div>
  )
}