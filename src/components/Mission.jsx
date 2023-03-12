import React from "react";

import Dream from "../assets/images/dream.jpg";
import Goal from "../assets/images/goal.jpg";
import styles from "../styles/Mission.module.css";

const Mission = () => {
  return (
    <div className={styles.mission_container}>
      <div className={styles.dream}>
        <div className={styles.dreamQuote}>
          <p>
            <span className="bg-[#141210] text-3xl">Our mission </span>is to
            empower individuals to achieve their full potential through access
            to quality education and opportunities for growth.
          </p>
        </div>
        <div className={styles.dreamImg}>
          <img src={Dream} alt="" />
        </div>
      </div>
      <div className={styles.striveQuote}>
        <p>
          We strive to provide a supportive community where individuals can
          network, participate in events and hackathons, and engage with
          open-source projects to build their skills and advance their careers.
        </p>
      </div>
      <div className={styles.dream}>
        <div className={styles.dreamImg}>
          <img src={Goal} alt="" />
        </div>
        <div className={styles.dreamQuote}>
          <p><span>Our goal</span> is to create a space where lifelong learning and
          personal development is accessible and achievable for all.</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
