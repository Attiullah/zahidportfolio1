import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <h1>ABOUT ME</h1>
      <img src='/images/profile.jpg' alt="Profile" className="profile-image" />
      <div className="specialty-section">
        <h2>My Specialty</h2>
        <p>
          <span className="highlight">An experienced Assistant Chef with over 8 years in Bakery and Culinary Arts.</span>
          <br /><br />
          A highly skilled and passionate Assistant Chef with over 8 years of hands-on experience in bakery operations, artisanal baking, and diverse culinary techniques. Adept at crafting high-quality baked goods, including bread, pastries, cakes, and specialty desserts, while ensuring consistency in taste, texture, and presentation. Proficient in ingredient preparation, dough fermentation, and advanced baking methods to create exceptional products that meet both customer preferences and industry standards.
          <br /><br />
          Beyond bakery expertise, I bring a strong proficiency in cooking authentic <span className="highlight">Italian cuisine</span>, mastering classic pasta dishes, risottos, wood-fired pizzas, and traditional sauces with a deep understanding of flavors and techniques. Additionally, I excel in preparing <span className="highlight">Indian cuisine</span>, specializing in rich curries, tandoori preparations, aromatic biryanis, and a variety of traditional spices and cooking methods.
          <br /><br />
          I thrive in <span className="highlight">fast-paced kitchen environments</span>, collaborating seamlessly with head chefs and culinary teams to maintain smooth kitchen operations. Well-versed in <span className="highlight">food safety regulations, hygiene protocols, and inventory management</span>, ensuring a well-organized and compliant kitchen. Passionate about creating memorable dining experiences through precision, creativity, and attention to detail.
          <br /><br />
          Eager to contribute my expertise to a dynamic culinary team, continually learning and innovating to elevate the quality of food and customer satisfaction. Kindly have a look at my <span className="highlight">Gallery</span> to see some of my recent works.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
