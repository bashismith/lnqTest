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

    // fetch('/api/emailSubmit', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     password: userInput,
    //   }),
    // })
    // .then((data) => {
    //   console.log(data)
    // })
    // .then((res) => setApiRes(res))

    if (userInput === Footer) {
      setClicked(true)
      setTimeout(() =>redirectRef.current.click(), 500);
    } else {
      userPswd.current.value = ''
      error.play()
      return
    }
  };

  return (
    <div>
      {clicked ?
      <a ref={redirectRef} href='https://lnq.splashthat.com/'>
        <label className="labelTwo">loading...</label>
      </a>
      :
      <div className="passwordProtect">
        <label className="label">LNQ</label>
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
