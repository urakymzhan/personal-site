import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import profile from '../assets/profile.jpg'

const Sidebar = () => {
    return (
        <div className="sidenav">
            <div className="profile">
                <Link to="/"><img src={profile} alt="profile" className="profile-img"/></Link>
                <p>Ulan Rakymzhanov <br/> Personal Blog</p>
            </div>
            <ul className="blog-titles">
                <Link to="/mystory">
                    <li> - My little story and guide on self development in tech </li>
                </Link>
            </ul>
        </div>
    );
  }

export default Sidebar;


