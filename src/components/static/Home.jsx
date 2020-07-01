import React from "react";
import flag from '../../assets/flag.gif';

const Home = () => {
    return (
        <div className="introduction">
            <h1>Hi, I'm Ulan </h1>
            <p>I like to transform my ideas into code, hike and watch basketball</p>   
            <h3>Purpose of this website:</h3>
            <p>Express my personal ideas</p>
            <p>Link to my projects</p>
            <p>Be useful to the world in some ways</p>   
            <p className='bornplaceAndSocialMedia' >I was born in <a href="https://www.google.com/maps/place/Kyrgyzstan/@41.1354938,70.2485868,6z/data=!3m1!4b1!4m5!3m4!1s0x3897381dfce927f3:0x281058b74e88c433!8m2!3d41.4674283!4d74.5532227" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'darkred'}}> Kyrgyzstan</a>, Central Asia.</p>
            <img src={flag} alt='flag' className="flag"/>
            <p className='bornplaceAndSocialMedia'>Click below icons to find me on social media</p>
        </div>
    );
  }

export default Home;