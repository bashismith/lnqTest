import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import EmailModal from'./components/EmailModal';
import StartModal from './components/StartModal';
import Footer from './components/Footer';
import logo from './images/lnq-bluecircle.png';
import Tap from './sound/Tap.mp3';
import Ambient from './sound/Ambient.mp3';


const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [music, setMusic] = useState(false);

  const ambient = new Audio(Ambient);
  ambient.volume = 0.3;
  const enterClick = () => {
    ambient.play();
    setClicked(!clicked)
  }
  if(clicked) {
    setInterval(ambient.play(),120000)
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
      <h1>Tap to Enter.</h1>
    </div>
      }
      <>
      <Navbar/>
      {showModal ?
        <EmailModal setShowModal={setShowModal}/>
        :
        <div className='timerDiv'>
         <Timer/>
         <div className='wearable'>
          <span>The Wearable Internet.</span>
         </div>
         {clicked ? <img alt='pulseLogo' className='tap'src={logo} onClick={openModal}/> : null}
        </div>
      }
      {clicked ?<Footer/> : null }
      </>

    </div>
  );
}

export default App;
