import React from 'react';
import { MainFooter } from './styled';

const Footer = ({ open }) => {
  return (
    <MainFooter>
      <a
        href="https://www.linkedin.com/in/ulan-rakymzhanov/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={require('../../assets/linkedIn.svg').default}
          className="footer-icon"
          alt="linkedin"
        />
      </a>
      <a
        href="https://twitter.com/home"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require('../../assets/twitter.svg').default}
          className="footer-icon"
          alt="twitter"
        />
      </a>
      <a href="#" rel="noopener noreferrer">
        <img
          src={require('../../assets/facebook.svg').default}
          className="footer-icon"
          alt="facebook"
        />
      </a>
      <a href="#" rel="noopener noreferrer">
        <img
          src={require('../../assets/instagram.svg').default}
          className="footer-icon"
          alt="instagram"
        />
      </a>
    </MainFooter>
  );
};

export default Footer;
