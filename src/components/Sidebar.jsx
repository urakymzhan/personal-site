import React from "react";
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import GettingStarted from './GettingStarted.jsx'

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
                    <Link to="/getstarted"><li>Getting Started</li></Link>
                </ul>
            </div>
            <div className="contents"> 
                <Switch>
                    <Route path="/getstarted">
                        <GettingStarted/>
                    </Route>
                    <Route path="/">
                        <div>Welcome!<br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                            <p style={{color: 'red'}}>THIS WEBSITE IN THE PROCESS OF CONSRTUCTION!</p>
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    </Router>
    );
  }

export default Sidebar;


