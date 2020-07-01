import React from "react";
import '../../styles/projects.css';
import forward from '../../assets/arrowRight.png'

function Projects() {
    return (
        <div className="projects">
            <h5> All projects has github link </h5>
            <hr />
            <br />
            <div className="row">
                <div className="project-card">
                    <a href="https://bootcampavenue.com/" target="_blank" rel="noopener noreferrer"> 
                        Bootcamp Avenue {" "}
                        <img src={forward} alt="forwarding" />
                    </a>
                    <p>Bootcamp reviews and informations</p>
                </div>
                <div className="project-card">
                    <a href="https://nba-pelicans.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
                        NBA Scores and News {" "}
                        <img src={forward} alt="forwarding" />
                    </a>
                    <p>Get updates of latest NBA news and scores</p>
                </div>
            </div>
            
            <div className="row">
            <div className="project-card">
                    <a href="https://upbeat-morse-c54379.netlify.com/" target="_blank" rel="noopener noreferrer"> 
                        InstaChat {" "}
                        <img src={forward} alt="forwarding" />
                    </a>
                    <p>Create rooms and chat with your friends</p>
                </div>
                <div className="project-card">
                    <a href="https://hajime-player.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
                        Hajime {" "}
                        <img src={forward} alt="forwarding" />
                    </a>
                    <p>Dedicated to one of my favorite artist</p>
                </div>
            </div>    

            <div className="row">
                <div className="project-card">
                    <a href="https://urakymzhan.github.io/pokedex/" target="_blank" rel="noopener noreferrer"> 
                        PokeGame {" "}
                        <img src={forward} alt="forwarding" />
                    </a>
                    <p>Small Pokemon Game </p>
                </div>
                {/* <div className="p1 row2">
                    <a href="https://hajime-player.herokuapp.com/" target="_blank" rel="noopener noreferrer"> 
                        Hajime {" "}
                        <img src={forward} alt="forwarding" />
                    </a>
                    <p>Dedicated to one of my favorite artist</p>
                </div> */}
            </div>         
        </div>
  );
}

export default Projects;