import React from "react";
import "./../styles/HamburgerMenu.css";

function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <div className="hamburger-menu" onClick={toggleMenu}>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
    </div>
  );
}

export default HamburgerMenu;
