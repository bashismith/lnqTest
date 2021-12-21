import React, {useState, useRef } from 'react';
import SignUpTap from '../sound/SignUpTap.mp3';
import ErrorSound from '../sound/Error.mp3';


const EmailModal = ({setShowModal}) => {
  const [mCData, setMCData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    const userEmail = emailRef.current.value
    const regexFormat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    const errSound = new Audio(ErrorSound);
    errSound.volume = 0.5;

    if (userEmail === '' || !regexFormat.test(userEmail)) {
      errSound.play();
      return
    }

    fetch('/api/emailSubmit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userEmail,
      }),
    })
    .then((data) => JSON.stringify(data))
    .then((data) => {
      setMCData(data.status)
    });

    const tapBtn = new Audio(SignUpTap);
    tapBtn.volume = 0.5;
    tapBtn.play();

    emailRef.current.value = '';

    setSubmitted(true)
    setTimeout(()=> setShowModal(prev => !prev), 2000)
  }
    const backClick = () => {
      setShowModal(prev => !prev)
  }

  return(
    <div className='emailDiv'>
      {submitted ?
       <span className='submitMsg'>Thank You.</span>
      :
      <>
      <h1 className='emailFormTitle'>Join the Waitlist.</h1>
      <form className='emailForm' onSubmit={handleSubmit}>
        <input className='emailInput' ref={emailRef} placeholder='Your Email' autoComplete="off"></input>
        <br></br>
        <input className='emailSubmit' type="Submit" value="Sign Up"></input>
      </form>
        <p className='backBtn' onClick={backClick}>x</p>
      </>
      }
    </div>
  )
};

export default EmailModal;