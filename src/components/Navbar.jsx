import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./Navbar.css"; 
import logo from "../assets/logo.jpg"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="logo-image" />

      {/* Desktop Menu */}
      <ul className={`nav-links ${isOpen ? "mobile-menu" : ""}`}>
        <li>
          <a href="#">Product <MdOutlineKeyboardArrowDown className="dropdown-icon" /></a>
        </li>
        <li>
          <a href="#">Customers <MdOutlineKeyboardArrowDown className="dropdown-icon" /></a>
        </li>
        <li>
          <a href="#">Resources <MdOutlineKeyboardArrowDown className="dropdown-icon" /></a>
        </li>
        <li>
          <a href="#">About Us <MdOutlineKeyboardArrowDown className="dropdown-icon" /></a>
        </li>
        <li><a href="#">Plans</a></li>
        <li className="btn-container">
          <button className="login-btn">Login</button>
          <button className="demo-btn">Request a Demo</button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
