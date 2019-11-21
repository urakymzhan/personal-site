import React from "react";
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import GettingStarted from './GettingStarted.jsx'
import flag from '../assets/flag.gif'
import profile from '../assets/profile.jpg'

const Sidebar = () => {
    return (
    <Router>
        <div className="bodyContent">
            <div className="sidenav">
                <div className="profile">
                    <Link to="/"><img src={profile} alt="profile" className="profile-img"/></Link>
                    <p>Ulan Rakymzhanov <br/> Personal Blog</p>
                </div>
                <ul className="blog-titles">
                    <Link to="/mystory"><li> <span></span>My little story and guide on self development in tech </li></Link>
                </ul>
            </div>
            <div className="contents"> 
                <Switch>
                    <Route path="/mystory">
                        <GettingStarted/>
                    </Route>
                    <Route path="/">
                        <div className="introduction">
                            <h1>Hi, I'm Ulan </h1>
                            <h4>I code, write, watch basketball, and run</h4>   
                            <h4>Purpose of this webiste is to:</h4>
                            <p>Express my personal ideas</p>
                            <p>Write educational blogs</p>
                            <p>Link to my upcoming projects</p>
                            <p>Be useful to the world in some ways</p>   
                            <p className='bornplaceAndSocialMedia' >I was born in <a href="https://www.google.com/maps/place/Kyrgyzstan/@41.1354938,70.2485868,6z/data=!3m1!4b1!4m5!3m4!1s0x3897381dfce927f3:0x281058b74e88c433!8m2!3d41.4674283!4d74.5532227" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'darkred'}}> Kyrgyzstan</a>, Central Asia.</p>
                            <img src={flag} alt='flag' className="flag"/>
                            <p className='bornplaceAndSocialMedia'>Click below icons to find me on social media</p>
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
    );
  }

export default Sidebar;


