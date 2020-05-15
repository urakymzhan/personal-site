import React from "react";
import { Link } from "react-router-dom";
import profile from '../../assets/profile.jpeg'

const Sidebar = () => {
    return (
        <div className="sidenav">
            <div className="profile">
                <Link to="/"><img src={profile} alt="profile" className="profile-img"/></Link>
                <p>Ulan Rakymzhanov <br/> Personal Blog</p>
            </div>
            <ul className="blog-titles">
                <Link to="/blogs">
                    <li> - Blogs </li>
                </Link>
                <Link to="/projects">
                    <li style={{color: "#c1eef4"}}> <span style={{color: "var(--sidebarColor)"}}>-</span> Projects</li>
                </Link>
            </ul>
        </div>
    );
  }

export default Sidebar;


