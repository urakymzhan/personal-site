import React from "react";
import '../App.css'
import {
    Switch,
    Route
  } from "react-router-dom";
import BlogOne from './BlogOne.jsx';
import WelcomePage from './WelcomePage.jsx';
import Projects from './Projects.jsx';

const Content = () => {
    return (
        <div className="contents"> 
            <Switch>
                <Route path="/mystory">
                    <BlogOne />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/">
                    <WelcomePage />
                </Route>
            </Switch>
        </div>
    );
  }

export default Content;


