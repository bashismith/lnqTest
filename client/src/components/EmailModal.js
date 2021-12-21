import React, {useState, useRef } from 'react';
import SignUpTap from '../sound/SignUpTap.mp3';
import mailchimp from '@mailchimp/mailchimp_marketing';



const EmailModal = ({setShowModal}) => {
  const [mCData, setMCData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault()
    const userEmail = emailRef.current.value
    if (userEmail === '') return

    fetch('/emailSubmit', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userEmail,
      }),
    })
    .then((data) => JSON.stringify(data))
    .then((data) => setMCData(data.message));

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
        <input className='emailInput' ref={emailRef} type='email' placeholder='Your Email' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" autoComplete="off"></input>
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