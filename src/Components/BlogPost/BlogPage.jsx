import React, { useEffect, useState } from "react";
import "./BlogPage.css";

const articles = [
  {
    id: 1,
    title: "The Mystical Whiskers",
    videoSrc: "https://videos.pexels.com/video-files/4493603/4493603-uhd_2560_1440_30fps.mp4",
    paragraphs: [
      "Whiskers are more than just adorable features; they are essential tools for navigating their environment. Cats rely on their whiskers to gauge space, allowing them to explore with confidence.",
      "These sensitive hairs help them detect nearby objects and even changes in the air, making them superb hunters. Understanding the importance of whiskers can enhance how we care for our feline friends.",
    ],
    voiceNote: "voice1.mp3",
  },
  {
    id: 2,
    title: "Wonders of the Wild",
    videoSrc: "https://videos.pexels.com/video-files/4977396/4977396-hd_1920_1080_24fps.mp4",
    paragraphs: [
      "The wild is full of mysteries waiting to be uncovered. From the majestic lions of Africa to the playful dolphins of the ocean, wildlife captures our imagination and inspires us to learn more about nature.",
      "Conservation efforts play a crucial role in preserving these beautiful creatures and their habitats. As we explore the wonders of the wild, we must also consider our responsibility in protecting them.",
    ],
    voiceNote: "voice2.mp3",
  },
  {
    id: 3,
    title: "Furry Adventures",
    videoSrc: "https://videos.pexels.com/video-files/8813894/8813894-uhd_2560_1440_30fps.mp4",
    paragraphs: [
      "Every pet owner knows the joy of furry adventures. Whether it's a hike in the mountains or a leisurely stroll in the park, pets bring excitement and companionship to our lives.",
      "These moments create unforgettable memories, strengthening the bond between pets and their owners. Let's cherish these adventures and appreciate the joy our furry friends bring.",
    ],
    voiceNote: "voice3.mp3",
  },
  {
    id: 4,
    title: "The Healing Power of Pets",
    videoSrc: "https://videos.pexels.com/video-files/17692133/17692133-hd_1920_1080_30fps.mp4",
    paragraphs: [
      "Pets have an incredible ability to heal our emotional wounds. Studies show that spending time with animals can reduce stress, anxiety, and depression.",
      "Therapy animals are used in various settings, such as hospitals and schools, to provide comfort and support. The unconditional love of a pet can truly be transformative.",
    ],
    voiceNote: "voice4.mp3",
  },
  {
    id: 5,
    title: "Understanding Animal Behavior",
    videoSrc: "https://videos.pexels.com/video-files/19975461/19975461-uhd_2560_1440_25fps.mp4",
    paragraphs: [
      "Understanding animal behavior is essential for nurturing happy and healthy pets. Each species has unique needs and ways of expressing themselves.",
      "By learning about their body language, vocalizations, and habits, we can create a better environment for our furry friends, ensuring they feel safe and understood.",
    ],
    voiceNote: "voice5.mp3",
  },
  {
    id: 6,
    title: "Nutrition for Happy Pets",
    videoSrc: "https://videos.pexels.com/video-files/5306154/5306154-uhd_2560_1440_30fps.mp4",
    paragraphs: [
      "Proper nutrition is key to a pet’s health and well-being. Just like humans, pets need a balanced diet that meets their specific needs based on their age, breed, and activity level.",
      "Feeding pets high-quality food can lead to longer, happier lives. Additionally, understanding the importance of hydration and treats can help maintain their overall health.",
    ],
    voiceNote: "voice6.mp3",
  },

];

const BlogPage = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newActiveArticle = Math.floor(scrollPosition / windowHeight);
      setActiveArticle(newActiveArticle);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePlayVoiceNote = (src) => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(src);
    setAudio(newAudio);
    newAudio.play();
  };

  return (
    <div style={{marginTop:"120px"}} className="blog-container">
      {articles.map((article, index) => (
        <section
          key={article.id}
          className={`article ${activeArticle === index ? "active" : ""}`}
        >
          <div className="content-wrapper">
            <h2 className="article-title">{article.title}</h2>
            <video style={{marginLeft:"50px"}} className="article-video" autoPlay muted  loop src={article.videoSrc}></video>
            {article.paragraphs.map((paragraph, idx) => (
              <p className="article-content" key={idx}>{paragraph}</p>
            ))}
            
          </div>
        </section>
      ))}
    </div>
  );
};

export default BlogPage;
