import React, { MouseEvent, useState } from 'react';
import Erik from '../erik';
export default function favouriteStudent() {
  const [showErik, setShowErik] = useState(false);

  const handleErikClick = () => {
    setShowErik(true);
  };

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="students">
            <button onClick={handleMouseEvent}>Ерік</button>
            <button onClick={handleMouseEvent}>Настя</button>
            <button onClick={handleMouseEvent}>Даня Щербаков</button>
            <button onClick={handleMouseEvent}>Едвард</button>
            <button onClick={handleMouseEvent}>Міша</button>
            <button onClick={handleMouseEvent}>Ваня</button>
            <button onClick={handleMouseEvent}>Олег</button>
            <button onClick={handleMouseEvent}>Юра</button>
            <button onClick={handleMouseEvent}>Даня Іллясевич</button>
            <button onClick={handleMouseEvent}>Назар</button>
            <button onClick={handleMouseEvent}>Повернутися на головну сторінку</button>

      </div>

      <div>
        {showErik ? (
          <Erik />
        ) : (
          <button onClick={handleErikClick}>Erik</button>
        )}
      </div>
    </div>
  );
}