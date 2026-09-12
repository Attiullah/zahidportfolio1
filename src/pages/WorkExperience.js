import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      <h1>WORK EXPERIENCE</h1>
      <div className="work-experience-grid">
        <div className="work-card">
          <img src="/images/1.jpg" alt="Chef" />
          <div className="work-card-content">
            <h2>Chef</h2>
            <p>Highglamp Hotel, Murree</p>
            <p>May 2025 - Present</p>
            <p>Preparing a diverse range of cuisines including Chinese, fast food, Pakistani dishes, bakery items, and Italian dishes. Handling multiple sections of the kitchen with consistent quality, taste, and hygiene standards for hotel guests.</p>
          </div>
        </div>
        <div className="work-card">
          <img src="/images/115.jpg" alt="Head Chef" />
          <div className="work-card-content">
            <h2>Head Chef</h2>
            <p>Express body by butter, Lahore</p>
            <p>2022 - 2024</p>
            <p>Oversee daily bakery operations, ensuring high standards of quality and efficiency. Develop and create new recipes, including specialty breads, pastries, and desserts.  Manage and train kitchen staff, guiding baking techniques and food safety. Maintain inventory, order ingredients, and manage stock levels to minimize waste. Ensure compliance with health and safety regulations, including food handling and cleanliness standards.</p>
          </div>
        </div>
        <div className="work-card">
          <img src="/images/114.jpg" alt="Assistant Chef" />
          <div className="work-card-content">
            <h2>Assistant Chef</h2>
            <p>Sweettooth, Lahore</p>
            <p>2021 - 2022</p>
            <p>Responsible for baking a variety of products, including brownies, waffles, and other desserts. Prepared ice creams and refreshing beverages such as lemonades and mint margaritas.</p>
          </div>
        </div>
        <div className="work-card">
          <img src="/images/113.jpg" alt="Assistant Chef" />
          <div className="work-card-content">
            <h2>Assistant Chef</h2>
            <p>National Bakery, Gilgit</p>
            <p>2019 - 2021</p>
            <p>Managed kitchen operations in the absence of the head chef, resulting in minimal disruption to service. Collaborated with the head chef to develop and execute weekly menu plans.</p>
          </div>
        </div>
        <div className="work-card">
          <img src="/images/112.jpg" alt="Assistant Chef" />
          <div className="work-card-content">
            <h2>Assistant Chef</h2>
            <p>Tibet Motel Sost, Hunza</p>
            <p>2017 - 2018</p>
            <p>Assisted in daily kitchen operations and food preparation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
