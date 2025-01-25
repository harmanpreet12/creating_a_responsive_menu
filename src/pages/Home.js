import React from "react";
import { Link } from "react-router-dom";
import './../styles/index.css'; // Assuming you have the styles set up in index.css

// Import images
import img1 from './../images/img1.jpg';
import img2 from './../images/img2.jpg';
import img3 from './../images/img3.jpg';

function Home() {
  return (
    <div className="home-page">
      <section className="home_hero-section">
        <h1 className="hero-heading">Welcome to FitnessPro</h1>
        <p className="hero-subheading">Your journey to a healthier life starts here!</p>
        <Link to="#" className="home_cta-button">Get Started</Link>
      </section>

      <section className="features">
        <div className="feature">
          <img src={img1} alt="Workout" className="feature-image" />
          <h3 className="feature-title">Workouts</h3>
          <p className="feature-description">
            Discover the best workouts tailored to your goals.
          </p>
        </div>

        <div className="feature">
          <img src={img2} alt="Nutrition" className="feature-image" />
          <h3 className="feature-title">Nutrition</h3>
          <p className="feature-description">
            Learn about proper nutrition to fuel your body.
          </p>
        </div>

        <div className="feature">
          <img src={img3} alt="Plans" className="feature-image" />
          <h3 className="feature-title">Plans</h3>
          <p className="feature-description">
            Explore customized plans for a healthier lifestyle.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
