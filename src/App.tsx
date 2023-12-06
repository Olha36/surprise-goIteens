import React from 'react';
import './App.css';
// import FavouriteStudent from './components/buttonWithChildrensNames';
import {BrowserRouter, Routes,  Route} from 'react-router-dom';
import Oleg from './pages/oleg';


function App() {
  // const [showFavouriteStudent, setShowFavouriteStudent] = useState(false);

  // const handleButtonClick = () => {
  //   setShowFavouriteStudent(true);
  // };

  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/oleg" element={<Oleg />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <div>
        {!showFavouriteStudent ? (
          <button onClick={handleButtonClick}>Click me!</button>
        ) : (
          <FavouriteStudent />
        )}
      </div> */}
    </div>
  );
}


export default App;
