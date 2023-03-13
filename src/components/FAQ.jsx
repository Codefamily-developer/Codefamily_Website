import React from "react";
import styles from "../styles/FAQ.module.css";
import { GoPlus } from "react-icons/go";

const FAQ = () => {
  return (
    <div className={styles.faq}>
      <div>
        <h1>FAQs</h1>
      </div>
      <div className={styles.faq_boxes}>
        <div className={styles.faq_box}>
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
        <div className={styles.faq_box}>
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
        <div className={styles.faq_box}>
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
        <div className={styles.faq_box}>
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
        <div className={styles.faq_box}>
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
        <div className={styles.faq_box}>
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
