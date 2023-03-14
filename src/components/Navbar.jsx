import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [active, setActive] = React.useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link to="/">Code Family</Link>
      </div>

      <ul
        className={`${active ? [styles.responsive_nav] : styles.navRight}`}
        onClick={() => {
          setActive(false);
        }}
      >
        <Link to="/resources">
          <li>Resources</li>
        </Link>
        <Link to="/events">
          <li>Events</li>
        </Link>
        <Link to="/blogs">
          <li>Blogs</li>
        </Link>
        <Link to="/community">
          <li>Community</li>
        </Link>
        <button className={styles.partner}>Partner with us</button>
      </ul>
      <button
        className={styles.mobile_menu}
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? <FaTimes></FaTimes> : <FaBars />}
      </button>
    </div>
  );
};

export default Navbar;
