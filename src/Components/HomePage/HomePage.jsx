import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  const navigate=useNavigate();

    const handlePoint1=()=>{
      navigate('/adopt');
  }
  const handlePoint2=()=>{
    navigate('/cats');
  }
  return (
    <div className="homepage">
      <video className="background-video" autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/27911209/12260895_2560_1440_60fps.mp4" type="video/mp4" /> {/* Update with your video path */}
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 style={{fontSize:"50px"}}>Welcome to <span style={{color:"#ff5757"}}>Whiskers And Wonders</span></h1>
        <p>Your go-to platform for all things cats! From adoption to food delivery, we've got you covered.</p>
        <div style={{marginTop:"37px"}}className="buttons">
          <button onClick={handlePoint1}className="btn">Adopt a Cat</button>
          {/* <button className="btn">Explore Cat Profiles</button> */}
          <button onClick={handlePoint2} className="btn">Order Cat Food</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
