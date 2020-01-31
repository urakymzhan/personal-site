import React from "react";
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import BlogOne from './BlogOne.jsx';
import WelcomePage from './WelcomePage.jsx';

const Content = () => {
    return (
        <div className="contents"> 
            <Switch>
                <Route path="/mystory">
                    <BlogOne />
                </Route>
                <Route path="/">
                    <WelcomePage />
                </Route>
            </Switch>
        </div>
    );
  }

export default Content;


