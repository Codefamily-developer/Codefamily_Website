import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  // FaTelegramPlane,
  FaTwitter,
  FaYoutube,
  // SlSocialFacebook,
} from "react-icons/fa";
import { IconContext } from "react-icons";
export default function Footer() {
  return (
    <div className="main-footer">
      <IconContext.Provider
        value={{ style: { fontSize: "40px", color: "#fefafa" } }}
      >
        <div className="main_header">
          <div className="footer">
            <div className="row1">
              <h2>Organisation</h2>
              <a>
                <Link to="/about">
                  <p>About</p>
                </Link>
              </a>
              <a>
                <Link to="/faq">
                  <p>FAQs</p>
                </Link>
              </a>
            </div>
            <div className="row2">
              <h2>Community</h2>
              <a>
                <Link to="/blogs">
                  <p>Blogs</p>
                </Link>
              </a>
              <a>
                <Link to="/events">
                  <p>Events</p>
                </Link>
              </a>
              <a>
                <Link to="/resources">
                  <p>Resources</p>
                </Link>
              </a>
            </div>
            <div className="row3">
              <h2>Socials</h2>
              <a href="https://in.linkedin.com/" target={"_blank"}>
                <p>Linkedin</p>
              </a>
              <a href="https://twitter.com/" target={"_blank"}>
                <p>Twitter</p>
              </a>
              <a href="https://www.youtube.com/" target={"_blank"}>
                <p>Youtube</p>
              </a>
              <a href="https://www.instagram.com/" target={"_blank"}>
                <p>Instagram</p>
              </a>
            </div>
            <div className="row4">
              <h2>Contact Us</h2>
              <a href="mailto:cf.codefamily@gmail.com" target={"_blank"}>
                <p>cf.codefamily@gmail.com</p>
              </a>
              <a href="https://discord.com/" target={"_blank"}>
                <p>Discord</p>
              </a>
              <a href="https://telegram.com/" target={"_blank"}>
                <p>Telegram</p>
              </a>
            </div>
          </div>
          <p className="line"></p>
          <div className="social_icons">
            <a href="https://in.linkedin.com/" target={"_blank"}>
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target={"_blank"}>
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/" target={"_blank"}>
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/" target={"_blank"}>
              <FaInstagram />
            </a>
            {/* <SlSocialFacebook/> */}
            <a>
              <FaGithub />
            </a>
            <a href="https://discord.com/" target={"_blank"}>
              <FaDiscord />
            </a>
            <a href="mailto:cf.codefamily@gmail.com" target={"_blank"}>
              <FaEnvelope />
            </a>
          </div>
          <p className="copyright">
            Copyright © 2023 -{" "}
            <span
              style={{
                color: "#5c4ce4",
                marginRight: "0.5%",
                marginLeft: "0.5%",
              }}
            >
              Code Family{" "}
            </span>{" "}
            All rights reserved
          </p>
        </div>
      </IconContext.Provider>
    </div>
  );
}
