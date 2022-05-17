import React, {useState, useRef } from 'react';
import SignUpTap from '../sound/SignUpTap.mp3';
import ErrorSound from '../sound/Error.mp3';

const Footer = 'LNQEVENT1999'

// const Footer = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const emailRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const userEmail = emailRef.current.value
//     const regexFormat = /[a-zA-Z0-9._%+-]+@[a-zA_Z0-9.-]+\.[a-zA_Z]{2,4}$/;


//     const errSound = new Audio(ErrorSound);
//     errSound.volume = 0.5;

//     if (userEmail === '' || !regexFormat.test(userEmail)) {
//       errSound.play();
//       return
//     }

//     fetch('/api/emailSubmit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         email: userEmail,
//       }),
//     })
//     .then((data) => JSON.stringify(data))
//     .then((data)=> console.log(data))
//     console.log(userEmail)

//     const tapBtn = new Audio(SignUpTap);
//     tapBtn.volume = 0.5;
//     tapBtn.play();

//     emailRef.current.value = '';

//     setSubmitted(true)
//     setTimeout(()=> setSubmitted(false), 7000)
//   }
//   return (
//     <footer>
//       {submitted ?
//         <p className='submitMsg'>Thank You.</p>
//         :
//         <form className='emailForm' onSubmit={handleSubmit} >
//           <input ref={emailRef}  className='emailInput' placeholder='Enter your email.' autoComplete="off"></input>
//           <div className="signUpDiv">
//            <input className='emailSubmit' type="Submit" value="Sign Up"></input>
//           </div>
//         </form>
//       }
//     </footer>
//   )
// };

export default Footer;