import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import EmailModal from'./components/EmailModal';
import Footer from './components/Footer';
import logo from './images/lnq-bluecircle.png';
import Tap from './sound/Tap.mp3';
import Ambient from './sound/Ambient.mp3';
import adidas from './images/threestripes-horiz.png';


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const ambient = new Audio(Ambient);
  ambient.volume = 0.3;
  ambient.loop = true;

  const enterClick = () => {
    ambient.play();
    setClicked(!clicked)
  }
  const openModal = () => {
    const tapBtn = new Audio(Tap);
    tapBtn.volume = 0.5;
    tapBtn.play();
    setShowModal(prev => !prev)
  }
  return (
    <div>
      {clicked ? null :
    <div className="overlay" onClick={enterClick}>
      <h1>Tap to Enter. </h1>
    </div>
      }
      <>
      {clicked ? <Navbar/> : null }
        <div className='timerDiv'>
         <div className='wearable'>
          <span className='spin'></span>
         </div>
         <img src={adidas} className='adidas' />
        </div>
      {clicked ?<Footer/> : null }
      </>
    </div>
  );
}

export default App;
