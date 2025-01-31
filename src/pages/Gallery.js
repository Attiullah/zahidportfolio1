import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // Directly add photo links here
  const images = [
    '/images/13.jpg',
    '/images/11.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/11.jpg',
  ];
  
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