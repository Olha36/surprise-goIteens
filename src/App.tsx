import React, { useState } from 'react';
import './App.css';
import FavouriteStudent from './components/buttonWithChildrensNames';


function App() {
  const [showFavouriteStudent, setShowFavouriteStudent] = useState(false);

  const handleButtonClick = () => {
    setShowFavouriteStudent(true);
  };

  return (
    <div>
      {!showFavouriteStudent ? (
        <button onClick={handleButtonClick}>Click me!</button>
      ) : (
        <FavouriteStudent />
      )}
    </div>
  );
}


export default App;
