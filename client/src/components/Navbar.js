import React from 'react';
import discord from '../images/discord-logo.svg';
import twitter from '../images/twitter-logo.svg';
import insta from '../images/instagram-logo.svg';


const Navbar = () => {
  return (
    <>
      <nav>
      <a href="https://discord.gg/lnq" target="_blank" alt='discord' rel="noreferrer" className='discord'><img src={discord}/></a>
      <a href="https://www.instagram.com/lnq.io/" alt='instagram' target="_blank" rel="noreferrer" className='insta'><img src={insta}/></a>
      <a href="https://twitter.com/lnq_io" target="_blank" alt='twitter' rel="noreferrer" className="twitter"><img src={twitter} height='16px'/></a>
    </nav>
    </>
  )
};

export default Navbar;