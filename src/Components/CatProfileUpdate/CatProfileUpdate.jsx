import React, { useState } from 'react';
import './CatProfileUpdate.css'

const CatProfileUpdate = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    type: '',
    breed: '',
    weight: '',
    color: '',
    personality: '',
    imageUrl: '',
  });
  const [showProfile, setShowProfile] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({
        ...profile,
        imageUrl: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowProfile(true);
  };

  return (
    <div className="profile-update-page">
      {!showProfile ? (
        <form className="profile-form" onSubmit={handleSubmit}>
          <h1>Update Your Cat's Profile</h1>

          <label>
            Cat's Name:
            <input 
              type="text" 
              name="name" 
              value={profile.name} 
              onChange={handleChange} 
              required 
            />
          </label>

          <label>
            Age:
            <input 
              type="number" 
              name="age" 
              value={profile.age} 
              onChange={handleChange} 
              required 
            />
          </label>

          <label>
            Type:
            <select 
              name="type" 
              value={profile.type} 
              onChange={handleChange} 
              required 
            >
              <option value="">Select Type</option>
              <option value="Domestic">Domestic</option>
              <option value="Wild">Wild</option>
              <option value="Exotic">Exotic</option>
            </select>
          </label>

          <label>
            Breed:
            <input 
              type="text" 
              name="breed" 
              value={profile.breed} 
              onChange={handleChange} 
            />
          </label>

          <label>
            Weight (kg):
            <input 
              type="number" 
              name="weight" 
              value={profile.weight} 
              onChange={handleChange} 
            />
          </label>

          <label>
            Color:
            <input 
              type="text" 
              name="color" 
              value={profile.color} 
              onChange={handleChange} 
            />
          </label>

          <label>
            Personality Traits:
            <textarea 
              name="personality" 
              value={profile.personality} 
              onChange={handleChange} 
            />
          </label>

          <label>
            Cat's Picture:
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
            />
          </label>

          <button type="submit">Update Profile</button>
        </form>
      ) : (
        <div className="profile-summary">
          <h2>Your Cat's Profile</h2>
          <img 
            src={profile.imageUrl || "https://via.placeholder.com/150"} 
            alt="Cat's Profile" 
            className="profile-image" 
          />
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Age:</strong> {profile.age} years</p>
          <p><strong>Type:</strong> {profile.type}</p>
          <p><strong>Breed:</strong> {profile.breed}</p>
          <p><strong>Weight:</strong> {profile.weight} kg</p>
          <p><strong>Color:</strong> {profile.color}</p>
          <p><strong>Personality Traits:</strong> {profile.personality}</p>
        </div>
      )}
    </div>
  );
};

export default CatProfileUpdate;
