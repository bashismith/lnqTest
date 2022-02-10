import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Ambient from './sound/Ambient.mp3';
import gif from './images/alpha11.gif';
import InterviewVideo from './components/InterviewVideo';



const App = () => {
  const [clicked, setClicked] = useState(0);
  const [word, setWord] = useState("LNQ.");
  const [count, setCount ] = useState(0);
  const ambient = new Audio(Ambient);
  ambient.volume = 0.3;
  ambient.loop = true;
  const enterClick = () => {
    if(clicked === 0){
      setClicked(1)
      return
    }
    setTimeout(() => setClicked(2), 500)
    ambient.play();
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
    if(clicked === 2) {
      setTimeout(() => cycleWords(count), 500)
      setCount((prev) => prev+=1)
    }
  },[word, clicked])

  return (
    <div>
     {clicked === 2 ?
      <>
        <Navbar/>
        <div className='threeStripes'>
          <h1 className='spin'>{word}</h1>
         <img src={gif} alt='three-stripes' className='adidas' />
        </div>
        <Footer/>
      </>
      :
      <>
        <input id="button" type="checkbox" onClick={enterClick}></input>
        {clicked > 0 ? null : <label htmlFor="button">Tap to Enter.</label> }
        <InterviewVideo/>
      </>
      }
    </div>
  );
}

export default App;
