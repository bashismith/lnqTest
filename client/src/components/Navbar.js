import React from "react";
import discord from "../images/discord-logo.svg";
import twitter from "../images/twitter-logo.svg";
import insta from "../images/instagram-logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="linkCircle">
            <a
              href="https://twitter.com/lnq_io"
              target="_blank"
              alt="twitter"
              rel="noreferrer"
              className="twitter"
            >
          <div className="circle">
              <img src={twitter} height="16px"
              className="twitter"
              />
          </div>
            </a>
        </div>
        <div className="linkCircle">
            <a
              href="https://discord.gg/lnq"
              target="_blank"
              alt="discord"
              rel="noreferrer"
              className="discord"
            >
          <div className="circle">
              <img src={discord}
              className="discord"
              />
          </div>
            </a>
        </div>
        <div className="linkCircle">
          <div className="circle">
            <a
              href="https://www.instagram.com/lnq.io/"
              alt="instagram"
              target="_blank"
              rel="noreferrer"
              className="insta"
            >
              <img src={insta}
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
