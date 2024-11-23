import React from "react";
import "./Footer.css"; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Whiskers and Wonders</h2>
        <p>
          Your one-stop destination for all things cats! We provide a platform 
          for cat adoptions, food orders, and community engagement. Join us in 
          making the world a better place for our furry friends.
        </p>
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/contactus" className="footer-link">Contact Us</a>
          <a href="/terms" className="footer-link">Terms & Conditions</a>
          <a href="/privacyp" className="footer-link">Privacy Policy</a>
        </div>
        <p className="footer-bottom-text">
          © 2024 Whiskers and Wonders. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
