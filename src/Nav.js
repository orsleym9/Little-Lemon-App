import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/Logo.svg";

function Nav() {
    return(
        <nav className="navBar">
            <img className="logo" src={logo} alt="Little Lemon Logo" />
            <ul className="navList">
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/menu">MENU</Link>
                </li>
                <li>
                    <Link to="/reservations">RESERVATIONS</Link>
                </li>
                <li>
                    <Link to="/online-order">ONLINE ORDER</Link>
                </li>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
            </ul>
        </nav>
    )
 }

export default Nav;