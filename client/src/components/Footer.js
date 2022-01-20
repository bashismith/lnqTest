import React from 'react';
import discord from '../images/discord-logo.svg';
import twitter from '../images/twitter-logo.svg';
import insta from '../images/instagram-logo.svg';



const Footer = () => {
  return (
    <div>
      <footer>
      <form className='emailForm' >
        <input className='emailInput' placeholder='Your Email.' autoComplete="off"></input>
        {/* <input className='emailSubmit' type="Submit" value="Sign Up"></input> */}
      </form>
    </footer>
    </div>
  )
};

export default Footer;