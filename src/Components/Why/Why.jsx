import React from 'react';
import { FaPaw, FaShieldAlt, FaRegClock, FaUsers, FaHeartbeat, FaShippingFast, FaCheckCircle, FaCat } from 'react-icons/fa';
import './Why.css';

const Why = () => {
  return (
    <div className="why-choose-us">
      <h1>Why Choose Whiskers and Wonders?</h1>
      <div className="reasons-container">
        
        {/* Reason 1 */}
        <div className="reason fade-in">
          <FaPaw className="icon" />
          <h2>Trusted Pet Adoption</h2>
          <p>We are committed to responsible pet adoption, ensuring the best care for your furry friend.</p>
        </div>

        {/* Reason 2 */}
        <div className="reason fade-in">
          <FaShieldAlt className="icon" />
          <h2>Secure Payments</h2>
          <p>All transactions are secured with top-tier encryption, so you can order with confidence.</p>
        </div>

        {/* Reason 3 */}
        <div className="reason fade-in">
          <FaRegClock className="icon" />
          <h2>24/7 Live Support</h2>
          <p>Get help anytime, anywhere with our round-the-clock customer support for any of your needs.</p>
        </div>

        {/* Reason 4 */}
        <div className="reason fade-in">
          <FaUsers className="icon" />
          <h2>Community of Cat Lovers</h2>
          <p>Join a growing community of people who are passionate about cats, sharing tips, advice, and stories.</p>
        </div>

        {/* Reason 5 */}
        <div className="reason fade-in">
          <FaHeartbeat className="icon" />
          <h2>Health Monitoring</h2>
          <p>Track your cat’s health, food intake, and vaccinations easily with our integrated health monitoring system.</p>
        </div>

        {/* Reason 6 */}
        <div className="reason fade-in">
          <FaShippingFast className="icon" />
          <h2>Fast Delivery</h2>
          <p>Get cat supplies delivered quickly and efficiently, ensuring you never run out of essentials.</p>
        </div>

        {/* Reason 7 */}
        <div className="reason fade-in">
          <FaCheckCircle className="icon" />
          <h2>Verified Sellers</h2>
          <p>We verify all sellers to ensure quality and trust when adopting or buying products for your cat.</p>
        </div>

        {/* Reason 8 */}
        <div className="reason fade-in">
          <FaCat className="icon" />
          <h2>Exclusive Content</h2>
          <p>Access videos, tips, and blogs from experts on how to keep your cat happy and healthy.</p>
        </div>

      </div>
    </div>
  );
};

export default Why;
