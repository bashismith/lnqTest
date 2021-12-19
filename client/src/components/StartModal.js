import React, { useState } from 'react';
import Ambient from '../sound/Ambient.mp3';

const StartModal = () => {
  const [clicked, setClicked] = useState(false);

  const modalClick = () => {
    const ambient = new Audio(Ambient);
    ambient.volume = 0.9;
    ambient.play();
    setClicked(!clicked)
  }

  return (
    <div>
      {clicked ? null :
      <div className="overlay">
        <button className='startModal' onClick={modalClick}>Start Modal</button>
      </div>
      }
    </div>
  )
};

export default StartModal;

