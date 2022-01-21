import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Ambient from './sound/Ambient.mp3';
import gif from './images/alpha11.gif';


const App = () => {
  const [clicked, setClicked] = useState(false);
  const [word, setWord] = useState("LNQ.");
  const [count, setCount ] = useState(0);
  const ambient = new Audio(Ambient);
  ambient.volume = 0.3;
  ambient.loop = true;
  const enterClick = () => {
    ambient.play();
    setClicked(!clicked)
  }

  const cycleWords = (num) => {
    const wordArr = [
      'Ambient',
      'Connected',
      'Integrated',
      'Engaging',
      'Active',
      'Inspiring',
      'Interactive',
      'Playful',
      'Disruptive',
      'Creative',
      'Explore',
      'Access',
      'Ownership',
      'Youthful',
      'Utility',
      'Experience',
      'Authenticate',
      'Exchange',
      'Innovate',
      'Flow',
      'Curiosity',
      'Impactful',
      'Subtle',
      'Organic',
      'Secure',
      'Powerful',
      'Culture',
      'Adidas x sLABS'
    ];
    if(wordArr[num]) setWord(wordArr[num])
  }

  useEffect(()=> {
    if(clicked) {
      setTimeout(() => cycleWords(count), 500)
      setCount((prev) => prev+=1)
    }
  },[word, clicked])

  return (
    <div>
      {clicked ?
      <>
        <Navbar/>
        <div className='threeStripes'>
          <h1 className='spin'>{word}</h1>
         <img src={gif} alt='three-stripes' className='adidas' />
        </div>
        <Footer/>
      </>
      :
      <div className="overlay" onClick={enterClick}>
        <h1>Tap to Enter. </h1>
      </div>
      }
    </div>
  );
}

export default App;
