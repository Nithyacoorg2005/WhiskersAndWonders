import React from "react";
import "./AboutUs.css";
import { FaPaw, FaHeart, FaTree, FaHandsHelping } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-us-container">
     
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted>
          <source src="https://videos.pexels.com/video-files/1722593/1722593-hd_1920_1080_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1 className="hero-title"><span style={{color:"#ff5757"}}>Whisker and Wonders</span> </h1>
          <p className="hero-subtitle">Discover the Magic Between Pets and Nature</p>
        </div>
      </section>


      <section className="mission-section">
        <h2 style={{marginTop:"100px"}}className="section-title">Our Mission</h2>
        <p className="section-paragraph">
          At Whisker and Wonders, we believe in creating a world where the beauty of nature and the companionship of pets come together. Our mission is to inspire people to embrace the wonders of the natural world while fostering deeper connections with their furry friends.
        </p>

     
        <div className="values-icons">
          <div className="icon-box">
            <FaPaw className="icon" />
            <h3>Animal Love</h3>
            <p>Caring deeply for the well-being of every animal.</p>
          </div>
          <div className="icon-box">
            <FaTree className="icon" />
            <h3>Nature First</h3>
            <p>Promoting harmony between pets and their natural surroundings.</p>
          </div>
          <div className="icon-box">
            <FaHandsHelping className="icon" />
            <h3>Community Driven</h3>
            <p>Building a supportive community for pet owners and nature lovers.</p>
          </div>
          <div className="icon-box">
            <FaHeart className="icon" />
            <h3>Compassion</h3>
            <p>Spreading love and compassion for both people and animals.</p>
          </div>
        </div>
      </section>

 
      <section style={{marginTop:"100px"}}className="story-section">
        <div style={{marginTop:"100px"}} className="story-content">
          <img className="story-image" src="https://images.pexels.com/photos/12201987/pexels-photo-12201987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Whisker and Wonders Team" />
          <div className="story-text">
            <h2 style={{marginTop:"50px"}} className="section-title">Our Story</h2>
            <p className="section-paragraph">
              Whisker and Wonders began with a simple love for pets and nature. Founded by a group of nature enthusiasts and animal lovers, we wanted to create a platform where people could explore the unique bond between pets and the natural world. From educational content to heartwarming stories, our goal is to nurture this connection in every way we can.
            </p>
            <p className="section-paragraph">
              Over the years, our community has grown, but our passion remains the same. We continue to innovate, bringing new experiences to pet lovers and nature explorers alike.
            </p>
          </div>
        </div>
      </section>

     

      <section style={{marginTop:"100px"}}className="cta-section">
        <h2 className="cta-title">Join Us in Our Journey</h2>
        <p className="cta-paragraph">Whether you're a pet owner, nature lover, or simply curious, there's a place for you in the Whisker and Wonders community. Follow our adventures and contribute to the cause.</p>
  
      </section>
    </div>
  );
};

export default AboutUs;
