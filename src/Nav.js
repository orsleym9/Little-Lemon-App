import React from "react";
import logo from "./assets/Logo.svg";
import { Link } from 'react-router-dom';

function Nav() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navBar">
      <img className="logo" src={logo} alt="Little Lemon Logo" />
      <ul className="navList">
        <li>
          <a href="#home-section" onClick={() => handleScroll("home-section")}>HOME</a>
        </li>
        <li>
          <a href="#about-section" onClick={() => handleScroll("about-section")}>ABOUT</a>
        </li>
        <li>
          <a href="#menu-section" onClick={() => handleScroll("menu-section")}>MENU</a>
        </li>
        <Link to="/reservations"><li>RESERVATIONS</li></Link>
        <li>
          <a href="#reviews-section" onClick={() => handleScroll("reviews-section")}>REVIEWS</a>
        </li>
        <li>
          <a href="#footer" onClick={() => handleScroll("footer")}>LOGIN</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
