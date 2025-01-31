import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const educationData = [
    {
      degree: "Bachelor’s of Art",
      institution: "Karakorum International University, Gilgit",
      duration: "2017 - 2020"
    },
    {
      degree: "Faculty of Arts",
      institution: "Government Degree College Cupis, Chizer",
      duration: "2015 - 2017"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % educationData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + educationData.length) % educationData.length);
  };

  return (
    <div className="education-container">
      <h1>EDUCATION</h1>
      <div className="education-slider">
        <button className="nav-button" onClick={prevSlide}>&#8249;</button>
        <div className="education-slide active">
          <blockquote>{educationData[currentIndex].degree}</blockquote>
          <p><strong>{educationData[currentIndex].institution}</strong></p>
          <span>{educationData[currentIndex].duration}</span>
        </div>
        <button className="nav-button" onClick={nextSlide}>&#8250;</button>
      </div>
      <div className="dummy-space">
        <p style={{ visibility: 'hidden', height: '300px' }}>This is a dummy space to push the footer down.</p>
      </div>
    </div>
  );
};

export default Education;
