import React, { useState } from 'react';
import './ContactUs.css'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{marginTop:"100px"}} className="contact-us-page">
      <h1 style={
        {fontSize:"50px",color:"black"}}>Contact Us</h1>
      <p className="intro-text">We’d love to hear from you! Please reach out with any questions, feedback, or just to say hello.</p>

      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt size={24} color="#ff5757" />
          <span>+1 234 567 890</span>
        </div>
        <div className="contact-item">
          <FaEnvelope size={24} color="#ff5757" />
          <span>support@whiskerandwonders.com</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt size={24} color="#ff5757" />
          <span>123 Cat Lane, Meowtown, TX</span>
        </div>
      </div>

      <div className="contact-form-container">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Subject
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </label>
            <label>
              Message
              <textarea name="message" value={formData.message} onChange={handleChange} rows="6" required />
            </label>
            <button type="submit">Send Message</button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h2>Thank you for reaching out!</h2>
            <p>We’ll respond shortly.</p>
          </div>
        )}
      </div>

      <div className="social-media">
        <h3>Connect With Us</h3>
        <FaFacebook size={30} className="social-icon" />
        <FaTwitter size={30} className="social-icon" />
        <FaInstagram size={30} className="social-icon" />
      </div>
    </div>
  );
};

export default ContactUs;
