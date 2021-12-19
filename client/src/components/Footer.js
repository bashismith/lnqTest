import React from 'react';
import discord from '../images/discord-logo.svg';
import twitter from '../images/twitter-logo.svg';
import insta from '../images/instagram-logo.svg';



const Footer = () => {
  return (
    <div>
      <footer>
      <a href="https://discord.com/" target="_blank" className='discord'><img src={discord}/></a>
      <a href="https://www.instagram.com/lnq.io/" target="_blank" className='insta'><img src={insta}/></a>
      <a href="https://twitter.com/lnq_io" target="_blank" className="twitter"><img src={twitter} height='16px'/></a>
    </footer>
    </div>
  )
};

export default Footer;