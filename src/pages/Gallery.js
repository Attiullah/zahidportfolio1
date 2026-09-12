import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Directly add photo links here
  const images = [
    '13.jpg',
    '11.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
  ].map((name) => `${process.env.PUBLIC_URL}/images/${name}`);
  
  return (
    <div className="gallery-container">
      <h1>GALLERY</h1>
      <p className="gallery-description">Here are some of the products that I have made in my previous workplaces. Kindly have a look.</p>
      <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery item ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;