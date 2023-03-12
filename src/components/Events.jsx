import React from "react";
import { ImBullhorn } from "react-icons/im";

import EventImg from "../assets/images/event.jpg";
import styles from "../styles/Event.module.css";

const Events = () => {
  return (
    <div className={styles.events}>
      <div className={styles.eventImg}>
        <img src={EventImg} alt="" width={"450px"} />
      </div>
      <div className={styles.event_data}>
        <div>
          <h1>Events</h1>
          <p>Empowering Tech Minds</p>
        </div>

        <div className={styles.event_quotes}>
          <div className={styles.eventQuote}>
            <ImBullhorn color="#f4c01e" size={24} />
            <h2>Exciting activities and challenges</h2>
          </div>
          <div className={styles.eventQuote}>
            <ImBullhorn color="#f4c01e" size={24} />
            <h2>Exciting activities and challenges</h2>
          </div>
          <div className={styles.eventQuote}>
            <ImBullhorn color="#f4c01e" size={24} />
            <h2>Opportunities to network and collaborate</h2>
          </div>
        </div>
        <div>
          <a>Ongoing Event</a>
        </div>
      </div>
    </div>
  );
};

export default Events;
