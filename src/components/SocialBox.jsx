import React from "react";

import { BsDiscord, BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../styles/SocialBox.css";
const SocialBox = () => {
  return (
    <div className="social">
      <div>
        <h1>Join Us</h1>
      </div>
      <div className="social-icons">
        <div className="social-box">
          <Link to={"https://discord.com/"} target="_blank">
            <BsDiscord color="#fff" size={48} />
          </Link>
        </div>
        <div className="social-box">
          <Link to={"https://telegram.org/"} target="_blank">
            <BsTelegram color="#fff" size={48} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialBox;
