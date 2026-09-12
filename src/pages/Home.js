import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/profile.jpg)` }}
    >
      <div className="hero-section">
        <img
          src={`${process.env.PUBLIC_URL}/images/front.jpg`}
          alt="Zahid Hussai"
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
