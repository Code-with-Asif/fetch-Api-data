import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <div className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Header;
