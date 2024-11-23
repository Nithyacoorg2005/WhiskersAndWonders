import React, { useEffect } from 'react';
import './FeaturedCats.css'; // Create this CSS file for styling and animations

const cats = [
  {
    name: "Milo",
    videoUrl: "https://videos.pexels.com/video-files/855282/855282-hd_1280_720_25fps.mp4", // Replace with actual video URL
    description: "Milo is a playful and energetic 2-year-old Bengal who loves climbing and chasing toys. He's looking for an active home to match his adventurous spirit.",
    icons: ['💖 Friendly', '🐾 Loves Climbing', '😸 Healthy'],
  },
  {
    name: "Bella",
    videoUrl: "https://videos.pexels.com/video-files/20032542/20032542-hd_1080_1920_30fps.mp4",
    description: "Bella is a calm and gentle 4-year-old Persian who adores being pampered. Perfect for someone who enjoys quiet companionship.",
    icons: ['💤 Calm', '🎀 Elegant', '🌸 Requires Grooming'],
  },
  {
    name: "Simba",
    videoUrl: "https://videos.pexels.com/video-files/28243854/12338080_1080_1920_60fps.mp4",
    description: "Simba, a 3-year-old Maine Coon, is the king of cuddles. He loves being around people and gets along well with other pets.",
    icons: ['👑 Cuddly', '🐱 Good with Pets', '🌟 Affectionate'],
  },
  {
    name: "Luna",
    videoUrl: "https://videos.pexels.com/video-files/4808518/4808518-hd_1080_1728_30fps.mp4",
    description: "Luna is an inquisitive 1-year-old Siamese who loves exploring every corner. She's incredibly curious and loves interactive play.",
    icons: ['🔍 Curious', '🧠 Intelligent', '🎮 Loves Playtime'],
  },
  {
    name: "Oliver",
    videoUrl: "https://videos.pexels.com/video-files/19659844/19659844-uhd_1440_2560_30fps.mp4",
    description: "Oliver is a mature 5-year-old Ragdoll who enjoys lounging in the sun. He's laid-back and perfect for a relaxed home environment.",
    icons: ['😻 Laid-back', '☀️ Sun-loving', '👴 Senior Cat'],
  }
];

const FeaturedCats = () => {

  useEffect(() => {
    const handleScroll = () => {
      const cats = document.querySelectorAll('.cat-card');
      cats.forEach(cat => {
        const position = cat.getBoundingClientRect().top;
        if (position < window.innerHeight) {
          cat.classList.add('slide-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="featured-cats">
      <h2 style={{marginTop:"100px"}}className="section-title">Super Cats of the Month</h2>
      <div className="cats-container">
        {cats.map((cat, index) => (
          <div style={{width:"90%",height:"300px"}} className="cat-card" key={index}>
            <div className="cat-video">
              <video src={cat.videoUrl} autoPlay muted loop></video>
            </div>
            <div className="cat-info">
              <h3 >{cat.name}</h3>
              <p>{cat.description}</p>
              <div className="cat-icons">
                {cat.icons.map((icon, iconIndex) => (
                  <span style={{fontSize:"25px"}}key={iconIndex} className="icon">{icon}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCats;
