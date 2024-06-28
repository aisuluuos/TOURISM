import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About us</h2>
          <p>
            About Us: Our travel agency specializes in organizing unforgettable
            journeys and providing high-quality tourism services. We take pride
            in crafting bespoke tours that cater to the unique desires and
            interests of our clients. Our team of professionals is ready to
            offer you the best routes, comfortable accommodations, and exciting
            excursions worldwide.
          </p>
          <div className="contact">
            <span>
              <i className="fas fa-phone"></i> +996508155295
            </span>
            <span>
              <i className="fas fa-envelope"></i> example@example.com
            </span>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Tours</h2>
          <ul>
            <li>
              <a href="#">Iceland</a>
            </li>
            <li>
              <a href="#">Kyrgyzstan</a>
            </li>
            <li>
              <a href="#">Japan</a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>We are on social media.</h2>

          <p>Follow us on social media!</p>

          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()}ExploreXperience
      </div>
    </footer>
  );
};

export default Footer;
