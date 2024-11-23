import React from "react";
import Slider from "react-slick";

import "./Testimonial.css";

const testimonials = [
  {
    name: "Emily R.",
    imageUrl: "https://images.pexels.com/photos/9783900/pexels-photo-9783900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
    story: "Adopted a beautiful Persian cat, and the process was seamless! Whiskers and Wonders made the entire adoption experience amazing.",
  },
  {
    name: "James P.",
    imageUrl: "https://images.pexels.com/photos/5456523/pexels-photo-5456523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story: "The live chat helped me find the perfect companion for my family. Their food and vaccination reminders are also a great touch!",
  },
  {
    name: "Olivia M.",
    imageUrl: "https://images.pexels.com/photos/4329736/pexels-photo-4329736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story: "As a first-time cat owner, I loved the guidance I received. The online payment system is smooth, and I always get quality cat food on time.",
  },
  {
    name: "Michael K.",
    imageUrl: "https://images.pexels.com/photos/16521230/pexels-photo-16521230/free-photo-of-a-man-holding-a-cat-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story: "Whiskers and Wonders made it so easy to connect with a seller and bring my new friend home. Highly recommend their platform!",
  },
  {
    name: "Sophia G.",
    imageUrl: "https://images.pexels.com/photos/17056023/pexels-photo-17056023/free-photo-of-portrait-of-a-girl-with-a-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story: "The best part is the vaccination reminders and the food intake tracking. It makes being a pet owner a stress-free experience.",
  },
  {
    name: "Daniel S.",
    imageUrl: "https://images.pexels.com/photos/19190147/pexels-photo-19190147/free-photo-of-man-and-persian-cat-looking-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story: "I never thought it would be this easy to find the right food and toys for my cat. The cart system works like a charm!",
  },
  {
    name: "Isabella T.",
    imageUrl: "https://images.pexels.com/photos/8359639/pexels-photo-8359639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    story: "From adoption to regular checkups, Whiskers and Wonders has it all! Their customer service is amazing and super responsive.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <section className="testimonial-section">
      <h2 style={{marginTop:"100px"}} className="section-title">Success Stories</h2>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-content">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="testimonial-img"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-story">{testimonial.story}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>







  );
};

export default Testimonial;
