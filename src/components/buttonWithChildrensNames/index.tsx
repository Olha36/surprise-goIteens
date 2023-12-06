// import React, { MouseEvent, useState} from 'react';
// import './index.css';
// import Erik from '../erik';
// import Nastiia from '../nastiia';
// import Dania1 from '../daniaszcher';
// import Edward from '../edward'
// import Oleg from '../oleg';
// import Nazar from '../nazar';
// import Dania2 from '../daniail';
// import Vania from '../vania';
// import Yura from '../yura';

// export default function favouriteStudent() {

//   const [showErik, setShowErik] = useState(false);
//   const [showNastiia, setShowNastiia] = useState(false);
//   const [showDania1, setShowDania1] = useState(false);
//   const [showEdward, setShowEdward] = useState(false);
//   const [showVania, setShowVania] = useState(false);
//   const [showYura, setShowYura] = useState(false);
//   const [showDania2, setShowDania2] = useState(false);
//   const [showNazar, setShowNazar] = useState(false);
//   const [showOleg, setShowOleg] = useState(false);

//   const handleMouseEventErik = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault(); 
//     setShowErik(true);
//   };

//   const handleMouseEventNastiia = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setShowNastiia(true);
//   };

//   const handleMouseEventDania1= (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setShowDania1(true);
//   };

//   const handleMouseEventEdward= (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setShowEdward(true);
//   };


//   const handleMouseEventYura= (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setShowYura(true);
//   };

//   const handleMouseEventNazar= (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setShowNazar(true);
//   };

//   const handleMouseEventOleg= (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setShowOleg(true);
//   };

//   const handleMouseEventDania2= (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setShowDania2(true);
//   };

//   const handleMouseEventVania= (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setShowVania(true);
//   };

//   return (
//     <div className="container">
//       <div className="students">
//             <button onClick={handleMouseEventErik}>Ерік</button>
//             <button onClick={handleMouseEventNastiia}>Настя</button>
//             <button onClick={handleMouseEventDania1}>Даня Щербаков</button>
//             <button onClick={handleMouseEventEdward}>Едвард</button>
//             <button onClick={handleMouseEventVania}>Ваня</button>
//             <button onClick={handleMouseEventOleg}>Олег</button>
//             <button onClick={handleMouseEventYura}>Юра</button>
//             <button onClick={handleMouseEventDania2}>Даня Іллясевич</button>
//             <button onClick={handleMouseEventNazar}>Назар</button>
//       </div>
//       <div>{showErik && <Erik />}</div>
//       <div>{showNastiia && <Nastiia />}</div>
//       <div>{showDania1 && <Dania1 />}</div>
//       <div>{showEdward && <Edward />}</div>
//       <div>{showOleg && <Oleg />}</div>
//       <div>{showYura && <Yura />}</div>
//       <div>{showDania2 && <Dania2 />}</div>
//       <div>{showNazar && <Nazar />}</div>
//       <div>{showVania && <Vania />}</div>
//     </div>
//   );
// }


import React from 'react';
export default function favouriteStudent() {
  return (
    <>
      <div>
        <button>Erik</button>
        <button>Dania</button>
      </div>
    </>
  )
}