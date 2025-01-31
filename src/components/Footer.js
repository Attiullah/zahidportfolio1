import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: #222;
  color: white;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  font-size: 1rem;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
`;

const FooterLinks = styled.div`
  margin-top: 200;
`;

const FooterLink = styled(Link)`
  color: #ffcc00;
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4500;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Zahid Hussain. All rights reserved.</p>
      <FooterLinks>
        <FooterLink to="/about-me">About Me</FooterLink>
        <FooterLink to="/gallery">Gallery</FooterLink>
        <FooterLink to="/contact">Contact</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
