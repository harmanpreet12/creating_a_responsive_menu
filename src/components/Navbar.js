import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";
import './../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Track active link

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked and set it as active
  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false); // Close the menu after clicking on a link
  };

  return (
    <header className="navbar">
      <div className="logo">FitnessPro</div>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={activeLink === "/" ? "active" : ""}
          onClick={() => handleLinkClick("/")}
        >
          Home
        </Link>
        <Link
          to="/workouts"
          className={activeLink === "/workouts" ? "active" : ""}
          onClick={() => handleLinkClick("/workouts")}
        >
          Workouts
        </Link>
        <Link
          to="/nutrition"
          className={activeLink === "/nutrition" ? "active" : ""}
          onClick={() => handleLinkClick("/nutrition")}
        >
          Nutrition
        </Link>
        <Link
          to="/plans"
          className={activeLink === "/plans" ? "active" : ""}
          onClick={() => handleLinkClick("/plans")}
        >
          Plans
        </Link>
        <Link
          to="/progress"
          className={activeLink === "/progress" ? "active" : ""}
          onClick={() => handleLinkClick("/progress")}
        >
          Progress Tracker
        </Link>
        <Link
          to="/community"
          className={activeLink === "/community" ? "active" : ""}
          onClick={() => handleLinkClick("/community")}
        >
          Community
        </Link>
      </nav>
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Navbar;
