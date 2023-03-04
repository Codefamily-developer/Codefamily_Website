import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navLeft">
            <Link to="/">Code Family</Link>
        </div>
        <div className="navRight">
            <Link to="/resources">Resources</Link>
            <Link to="/events">Events</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/community">Community</Link>
            <button>Partner with us</button>
        </div>
    </div>
  )
}

export default Navbar