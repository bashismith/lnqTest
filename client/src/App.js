import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import InterviewVideo from "./components/InterviewVideo";
import Error from "./sound/Error.mp3";

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [apiRes, setApiRes] = useState()
  const userPswd = useRef();
  const redirectRef = useRef();
  const error = new Audio(Error);
  error.volume = 0.3;
  const password = process.env.PROTECTED;

  const enterClick = (e) => {
    e.preventDefault();
    const userInput = userPswd.current.value;
    if (userInput === Footer) {
      setClicked(true)
    } else {
      userPswd.current.value = ''
      error.play()
      return
    }
  };

  return (
    <div>
      {!clicked ?
      <>
        <input className='input' id="button" type="checkbox"></input>
        <label className='effectLabel'htmlFor="button">Tap to Stream.</label>
        <InterviewVideo/>
      </>
      :
      <div className="passwordProtect">
        <label className="label1">LNQ</label>
        <form className="passwordForm" onSubmit={enterClick}>
          <input
            className="passwordInput"
            placeholder="Enter Password"
            autoComplete="off"
            ref={userPswd}
          ></input>
          <input className="emailSubmit" type="Submit"></input>
        </form>
      </div>
      }
    </div>
  );
};

export default App;
