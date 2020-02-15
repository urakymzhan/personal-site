import React from "react";
import '../styles/projects.css';
import forward from '../assets/arrowRight.png'

function Projects() {
    return (
        <div className="projects">
            <h5> All projects has github link </h5>
            <hr />
            <br />
            <div className="row">
                <div className="p1 row1">
                <a href="https://nba-pelicans.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
                        NBA Scores and News {" "}
                        <img src={forward} alt="forwarding" />
                    </a>
                    <p>Get updates of latest NBA news and scores</p>
                </div>
                <div className="p1 row1">
                    <a href="https://upbeat-morse-c54379.netlify.com/" target="_blank" rel="noopener noreferrer"> 
                        InstaChat {" "}
                        <img src={forward} alt="forwarding" />
                    </a>
                    <p>Create rooms and chat with your friends</p>
                </div>
            </div>
            
            <div className="row">
                <div className="p1 row2">
                    <a href="https://contact-form-ulan.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
                        Submission Form {" "}
                        <img src={forward} alt="forwarding" />
                    </a>
                    <p>Collect information from people </p>
                </div>
            </div>            
        </div>
  );
}

export default Projects;