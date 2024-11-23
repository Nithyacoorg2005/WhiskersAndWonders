import React, { useState } from "react";
import './CatCare.css'

const CatCare = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    notes: "",
  });
  const [advice, setAdvice] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let adviceText = `Hello ${formData.name || "there"}! Here’s our care advice for your cat:\n\n`;

    if (formData.age) {
      const age = parseInt(formData.age);
      adviceText += `At age ${age}, your cat ${
        age < 2
          ? "is still young! Ensure they get plenty of playtime and regular vaccinations."
          : age < 7
          ? "is in their prime years. Maintain a balanced diet and regular vet checkups."
          : "is a senior cat. Focus on joint care, regular health screenings, and a calm environment."
      }\n`;
    }

    if (formData.weight) {
      const weight = parseFloat(formData.weight);
      adviceText += `For a weight of ${weight}kg, ensure daily feeding of ${
        weight < 4
          ? "smaller portions with nutrient-dense foods."
          : weight < 8
          ? "a balanced diet, avoiding overfeeding."
          : "a calorie-controlled diet to avoid health issues."
      }\n`;
    }

    if (formData.notes) {
      adviceText += `Special Notes: ${formData.notes}`;
    }

    setAdvice(adviceText);
  };

  return (
    <div className="cat-care-page">
      {/* Background Video Section */}
      <div className="background-video-container">
        <video autoPlay muted loop className="background-video">
          <source
            src="https://videos.pexels.com/video-files/8362629/8362629-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>Comprehensive Cat Care Guide</h1>
          <p>Everything you need to know to keep your furry friend happy and healthy.</p>
        </div>
      </div>

      {/* Cat Care Information Sections */}
      <section className="info-section">
        <h2>Vaccination Schedule</h2>
        <p>Vaccinating your cat is crucial for their health and safety. Consult your vet for a personalized schedule.</p>
        <ul>
          <li>6-8 weeks: Feline Distemper, Rhinotracheitis</li>
          <li>12-16 weeks: Rabies</li>
          <li>Annual: Booster shots</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Dietary Recommendations</h2>
        <p>Ensure your cat gets the right amount of nutrients. Choose high-quality food suited to their age and weight.</p>
        <ul>
          <li>For kittens: Protein-rich diets for growth</li>
          <li>For adults: Balanced meals with fiber</li>
          <li>For seniors: Easily digestible, joint-support foods</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Playtime and Exercise</h2>
        <p>Keep your cat active and happy with toys, scratching posts, and daily play sessions.</p>
        <ul>
          <li>Kittens: 30-40 minutes of play daily</li>
          <li>Adults: 15-30 minutes of interactive play</li>
          <li>Seniors: Gentle stimulation, like puzzle toys</li>
        </ul>
      </section>

      {/* Watch and Learn Section */}
      <section className="watch-learn-section">
        <h2>Watch and Learn</h2>
        <div className="videos-container">
          <div className="video-card">
            <video controls autoPlay loop
              src="https://videos.pexels.com/video-files/6864868/6864868-uhd_2732_1440_25fps.mp4"
              title="Cat Grooming"
              
              allowFullScreen
            ></video>
            <p>How to Groom Your Cat</p>
          </div>
          <div className="video-card">
            <video controls autoPlay  loop
              src="https://videos.pexels.com/video-files/6853194/6853194-uhd_2732_1440_25fps.mp4"
              title="Cat Nutrition"
              
              allowFullScreen
            ></video>
            <p>Essential Cat Nutrition</p>
          </div>
          <div className="video-card">
            <video controls autoPlay  loop
              src="https://videos.pexels.com/video-files/6865209/6865209-uhd_2732_1440_25fps.mp4"
              title="Cat Playtime"
              
              allowFullScreen
            ></video>
            <p>Fun Playtime Ideas</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="care-form-section">
        <h2>Get Personalized Care</h2>
        <p>Provide your cat's details to receive tailored care recommendations.</p>
        <form className="care-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Cat's Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age (in years)"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight (in kg)"
            value={formData.weight}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="notes"
            placeholder="Special Notes (e.g., health concerns)"
            value={formData.notes}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>

        {/* Advice Section */}
        {advice && (
          <div className="advice-section">
            <h3>Personalized Advice</h3>
            <p>{advice}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default CatCare;
