import React, { MouseEvent, useState }from 'react';
import FavouriteStudent from '../components/buttonWithChildrensNames';

export default function oleg() {
  const [showMainPage, setShowMainPage] = useState(false)
  
  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowMainPage(true);
  };

  return (
    <>
      <div className="container">
        <h1>Oleg</h1>
        <button onClick={handleMouseEvent}>Повернутися на головну сторінку</button>
      </div>
      <div>{showMainPage && <FavouriteStudent />}</div>
    </>
  )
}