import React from "react";

const Footer = () => {
    return (
    <footer>
      <a href="https://www.linkedin.com/in/ulan-rakymzhanov/" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/linkedIn.svg')} className="footer-icon" alt="linkedin" /></a>
      <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/twitter.svg')} className="footer-icon" alt="twitter"/></a>
      <a href="https://www.facebook.com/ulan13" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/facebook.svg')} className="footer-icon" alt="facebook" /></a>
      <a href="https://www.instagram.com/u_rakymzhan/" target="_blank" rel="noopener noreferrer"><img src={require('../../assets/instagram.svg')} className="footer-icon"  alt="instagram"/></a>
    </footer>
    );
  }

export default Footer;