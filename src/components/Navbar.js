import React, { useState } from "react";
import { menuItems } from "../details/menuItems.js";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="NavbarItems" id="top">
      <h1 className="navbar-logo">
        <Link to="home" spy={true} smooth={true}>
          <img
            src="images/m.svg"
            alt="logo"
            height="50"
            width="50"
            className="logo"
          />
        </Link>
      </h1>
      <div className="menu-icon" onClick={() => setToggle(!toggle)}>
        <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={toggle ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <Link to={item.url} spy={true} smooth={true} className="nav-links">
              <li key={index}>{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
