import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InterviewVideo from './components/InterviewVideo';
import Ambient from './sound/Ambient.mp3';




const App = () => {
  const [clicked, setClicked] = useState(0);
  const [word, setWord] = useState("LNQ.");
  const [count, setCount ] = useState(false);
  const ambient = new Audio(Ambient);
  ambient.volume = 0.3;
  ambient.loop = true;
  const enterClick = () => {
      setClicked(true)
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
     {clicked?
      <>
        <div className='threeStripes'>
        <h1 className='spin'>LNQ</h1>
        <Navbar/>
         <h1 className="join">JOIN THE COMMUNITY</h1>
        </div>
      </>
      :
      <>
        <label className="label" onClick={enterClick}>Tap to Enter.</label>
      </>
      }
    </div>
  );
}

export default App;
