import React from "react";

import { BsDiscord, BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "../styles/SocialBox.module.css";
const SocialBox = () => {
  return (
    <div className={styles.social}>
      <div>
        <h1>Join Us</h1>
      </div>
      <div className={styles.social_icons}>
        <div className={styles.social_box}>
          <Link to={"https://discord.com/"} target="_blank">
            <BsDiscord color="#fff" size={48} />
          </Link>
        </div>
        <div className={styles.social_box}>
          <Link to={"https://telegram.org/"} target="_blank">
            <BsTelegram color="#fff" size={48} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialBox;
