import React from "react";

import styles from "../styles/Resources.module.css";
import Book from "../assets/images/book.jpg";
import { AiFillStar } from "react-icons/ai";
const Resources = () => {
  return (
    <div className={styles.resources_container}>
      <div className={styles.resources_data}>
        <div className={styles.resources_quote}>
          <h1>Resources</h1>
          <p>
            <span>Free resources</span> are a great way to learn and improve
            your skills without spending money.
          </p>
        </div>

        <div>
          <div className={styles.star_quote}>
            <AiFillStar color="#f4c01e" size={24}/>
            <h2>High-quality content from experts</h2>
          </div>
          <div className={styles.star_quote}>
            <AiFillStar color="#f4c01e"size={24} />
            <h2>Flexible, anytime access</h2>
          </div>
          <div className={styles.star_quote}>
            <AiFillStar color="#f4c01e" size={24}/>
            <h2>Wide variety of learning styles</h2>
          </div>
          <div className={styles.star_quote}>
            <AiFillStar color="#f4c01e" size={24}/>
            <h2> No commitment required.</h2>
          </div>
        </div>
        <div>
          <a>Explore resources</a>
        </div>
      </div>
      <div>
        <img src={Book} alt="" />
      </div>
    </div>
  );
};

export default Resources;
