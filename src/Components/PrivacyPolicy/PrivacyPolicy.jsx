import React from 'react';
import './PrivacyPolicy.css'
import { FaUserSecret, FaShieldAlt, FaCookieBite, FaRegClock, FaUserShield } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <header className="page-header">
        <h1>Privacy Policy</h1>
        <p>Your privacy is our priority. Here’s how we handle your information securely and responsibly.</p>
      </header>

      <section className="policy-section">
        <div className="section-header">
          <FaUserSecret size={36} className="icon" />
          <h2>Information Collection</h2>
        </div>
        <p>
          We collect information such as contact details, device data, and user preferences to better serve you and
          personalize your experience.
        </p>
        <img src="/images/information-collection.jpg" alt="Information Collection" className="image" />
      </section>

      <section className="policy-section">
        <div className="section-header">
          <FaShieldAlt size={36} className="icon" />
          <h2>How We Use Your Information</h2>
        </div>
        <p>
          We use your data to improve our website, provide customer support, and communicate updates or offers.
        </p>
        <video src="/videos/data-usage.mp4" controls className="media"></video>
      </section>

      <section className="policy-section">
        <div className="section-header">
          <FaCookieBite size={36} className="icon" />
          <h2>Cookies & Tracking</h2>
        </div>
        <p>
          Cookies enhance your browsing by storing preferences and tracking engagement. Manage cookies in settings anytime.
        </p>
        <img src="/images/cookies.jpg" alt="Cookies and Tracking" className="image" />
      </section>

      <section className="policy-section">
        <div className="section-header">
          <FaRegClock size={36} className="icon" />
          <h2>Data Retention</h2>
        </div>
        <p>
          We retain data only as long as necessary, following legal requirements and fulfilling our obligations.
        </p>
        <img src="/images/data-retention.jpg" alt="Data Retention" className="image" />
      </section>

      <section className="policy-section">
        <div className="section-header">
          <FaUserShield size={36} className="icon" />
          <h2>Your Rights</h2>
        </div>
        <p>
          You have the right to access, correct, or delete your data. Contact us to exercise these rights, which may vary by location.
        </p>
        <img src="/images/your-rights.gif" alt="User Rights" className="media" />
      </section>

      <footer className="contact-section">
        <h2>Need More Information?</h2>
        <p>Contact our Privacy Team at <a href="mailto:privacy@whiskerandwonders.com">privacy@whiskerandwonders.com</a>.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
