import React from "react";
import "../styles/FAQ.css";
import { GoPlus } from "react-icons/go";

const FAQ = () => {
  return (
    <div className="faq">
      <div>
        <h1>FAQs</h1>
      </div>
      <div className="faq-boxes">
        <div className="faq-box">
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
        <div className="faq-box">
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
        <div className="faq-box">
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
        <div className="faq-box">
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
        <div className="faq-box">
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
        <div className="faq-box">
          <input type="text" />
          <GoPlus size={24} color={"#fff"} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
