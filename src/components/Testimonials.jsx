import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../styles/Testimonials.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import RightDoubleQuote from "../assets/icons/quotation.png";
import User1 from "../assets/images/profile.png";

export default function Testimonials() {
  return (
    <React.Fragment>
      <h1>Testimonials</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-box">
            {/* <img src={RightDoubleQuote} alt="" /> */}
            <div className="review">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                sed debitis vitae atque nobis sit recusandae fugit fuga ea
                molestiae! Numquam itaque quas perferendis veniam nostrum
                corrupti? Vel dolorum recusandae adipisci officia nesciunt
                voluptate alias.
              </p>
              <div className="reviewer">
                <div className="profilePic">
                  <img src={User1} alt="" />
                </div>
                <h3>
                  John Doe <br />
                  <span>Developer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="testimonial-box">
            {/* <img src={RightDoubleQuote} alt="" /> */}
            <div className="review">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                sed debitis vitae atque nobis sit recusandae fugit fuga ea
                molestiae! Numquam itaque quas perferendis veniam nostrum
                corrupti? Vel dolorum recusandae adipisci officia nesciunt
                voluptate alias.
              </p>
              <div className="reviewer">
                <div className="profilePic">
                  <img src={User1} alt="" />
                </div>
                <h3>
                  John Doe <br />
                  <span>Developer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="testimonial-box">
            {/* <img src={RightDoubleQuote} alt="" /> */}
            <div className="review">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                sed debitis vitae atque nobis sit recusandae fugit fuga ea
                molestiae! Numquam itaque quas perferendis veniam nostrum
                corrupti? Vel dolorum recusandae adipisci officia nesciunt
                voluptate alias.
              </p>
              <div className="reviewer">
                <div className="profilePic">
                  <img src={User1} alt="" />
                </div>
                <h3>
                  John Doe <br />
                  <span>Developer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="testimonial-box">
            {/* <img src={RightDoubleQuote} alt="" /> */}
            <div className="review">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                sed debitis vitae atque nobis sit recusandae fugit fuga ea
                molestiae! Numquam itaque quas perferendis veniam nostrum
                corrupti? Vel dolorum recusandae adipisci officia nesciunt
                voluptate alias.
              </p>
              <div className="reviewer">
                <div className="profilePic">
                  <img src={User1} alt="" />
                </div>
                <h3>
                  John Doe <br />
                  <span>Developer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="testimonial-box">
            {/* <img src={RightDoubleQuote} alt="" /> */}
            <div className="review">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                sed debitis vitae atque nobis sit recusandae fugit fuga ea
                molestiae! Numquam itaque quas perferendis veniam nostrum
                corrupti? Vel dolorum recusandae adipisci officia nesciunt
                voluptate alias.
              </p>
              <div className="reviewer">
                <div className="profilePic">
                  <img src={User1} alt="" />
                </div>
                <h3>
                  John Doe <br />
                  <span>Developer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="testimonial-box">
            {/* <img src={RightDoubleQuote} alt="" /> */}
            <div className="review">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
                sed debitis vitae atque nobis sit recusandae fugit fuga ea
                molestiae! Numquam itaque quas perferendis veniam nostrum
                corrupti? Vel dolorum recusandae adipisci officia nesciunt
                voluptate alias.
              </p>
              <div className="reviewer">
                <div className="profilePic">
                  <img src={User1} alt="" />
                </div>
                <h3>
                  John Doe <br />
                  <span>Developer</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}
