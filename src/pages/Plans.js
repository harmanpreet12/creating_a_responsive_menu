import React from "react";
import { Link } from "react-router-dom";
import './../styles/index.css'; // Importing the CSS file for styling

function Plans() {
  return (
    <div className="plans-page">
      <section className="hero-section">
        <h1 className="hero-heading">Choose Your Fitness Plan</h1>
        <p className="hero-subheading">Find the perfect plan to meet your fitness goals!</p>
        <Link to="#" className="cta-button">Learn More</Link>
      </section>
    </div>
  );
}

export default Plans;
