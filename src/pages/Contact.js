import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    alert('Message sent!');
  };

  return (
    <div className="contact-container">
      <h1>CONTACT ME</h1>
      <div className="contact-info">
        <p>Email: <b>zh3852058@gmail.com</b></p>
        <p>Phone Number: <b>+92 3408265562</b></p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="tel" placeholder="Phone" required />
        <input type="email" placeholder="Email address" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
