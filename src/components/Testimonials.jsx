import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import styles from "../styles/Testimonials.module.css";

import RightDoubleQuote from "../assets/icons/quotation.png";
import User1 from "../assets/images/profile.png";

export default function Testimonials() {
  return (
    <React.Fragment>
      <div className={styles.testimonials}>
        <div className={styles.container}>
          <h1>Testimonials</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.profile}>
                <img src={User1} alt="" className={styles.user} />
                <blockquote>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt possimus commodi obcaecati, natus at exercitationem
                  cumque sint aut quia ullam optio voluptatum, culpa temporibus
                  dicta?
                </blockquote>
                <h3>
                  John Doe <span>Developer, XYZ</span>
                </h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.profile}>
                <img src={User1} alt="" className={styles.user} />
                <blockquote>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt possimus commodi obcaecati, natus at exercitationem
                  cumque sint aut quia ullam optio voluptatum, culpa temporibus
                  dicta?
                </blockquote>
                <h3>
                  John Doe <span>Developer, XYZ</span>
                </h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.profile}>
                <img src={User1} alt="" className={styles.user} />
                <blockquote>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt possimus commodi obcaecati, natus at exercitationem
                  cumque sint aut quia ullam optio voluptatum, culpa temporibus
                  dicta?
                </blockquote>
                <h3>
                  John Doe <span>Developer, XYZ</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
