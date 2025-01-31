import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img
          src='/images/profile.jpg' // Replace with your image URL
          alt="Zahid Hussain"
          className="profile-image"
        />
        <div className="text-content">
          <h1>Welcome to My Portfolio</h1>
          <p>
            I’m Zahid Hussain, a passionate chef with over 8 years of experience, with a keen eye for taste, texture, and presentation. This portfolio showcases my journey, work experience, and skills that I have honed over the years. Feel free to explore my work, check out my Gallery, and get to know more about what I do. If you have any questions don’t hesitate to reach out! Thank you!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
