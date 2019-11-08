import React from "react";
import '../App.css'

const image = {
      width: 30,
      height: 30,
      paddingLeft: 5
};

const Footer = () => {
    return (
    <footer>
      <a href="https://www.linkedin.com/in/ulan-rakymzhanov/" target="_blank" rel="noopener noreferrer"><img src={require('../assets/linkedIn.svg')} alt="linkedin" style={image}/></a>
      <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer"><img src={require('../assets/twitter.svg')} style={image} alt="twitter"/></a>
      <a href="https://www.facebook.com/ulan13" target="_blank" rel="noopener noreferrer"><img src={require('../assets/facebook.svg')} style={image}alt="facebook" /></a>
      <img src={require('../assets/instagram.svg')} alt="instagram" style={image}/>
    </footer>
    );
  }

export default Footer;