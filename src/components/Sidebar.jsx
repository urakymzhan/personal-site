import React from "react";
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import GettingStarted from './GettingStarted.jsx'
import gif from '../assets/loading.gif'

const image = {
    width: 100,
    height: 100,
    borderRadius: 400/2
};

const Sidebar = () => {
    return (
    <Router>
        <div className="bodyContent">
            <div className="sidenav">
                <div className="profile">
                    <Link to="/"><img src={require('../assets/profile.jpg')} style={image} alt="profile"/></Link>
                    <p>Ulan Rakymzhanov <br/> Personal Blog</p>
                </div>
                <ul>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/family"><li>Family</li></Link>
                </ul>
            </div>
            <div className="contents"> 
                <Switch>
                    <Route path="/about">
                        <GettingStarted/>
                    </Route>
                    <Route path="/family">
                        <div className="family" style={{fontSize: '25px'}}>
                            <p>Januzak, Bebe, Enes</p>
                            <p style={{color: '#FF0000'}}>Kana, Guli, Ayima</p>
                            <p>Kairat, Nuria, Azalia, Milana</p> 
                            <p style={{color: '#4169E1'}}>Topa, Ayok, Amalia</p>
                            <p>Kairat, Zhibek, future...</p>
                            <p style={{color: '#808000'}}>Hi From Ulan, Jazzy</p>
                            </div>
                            <img src='https://media.giphy.com/media/4adI6CB0g4KTomIbKx/giphy.gif' width='200px' height='200px' alt='waive'/>
                    </Route>
                    <Route path="/">
                        <div>
                            <p>
                                Purpose of this website: <br/><br/>
                                1. Expressing my ideas <br/>
                                2. Educational blogs <br/>
                                3. ...so on <br/>
                            </p>
                            <br/><br/><br/><br/><br/><br/>
                            <p style={{color: '#800000'}}>THIS WEBSITE IN THE PROCESS OF BULDING!</p>
                            <img src={gif} alt='loading' />
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
    );
  }

export default Sidebar;


