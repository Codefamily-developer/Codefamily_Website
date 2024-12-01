import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const isAuthenticated = true; // Replace with your authentication logic

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
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link to="/partner">Partner with us</Link>
          </li>
        )}
      </ul>
      <button
        className={styles.mobile_menu}
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Navbar;
