import React from "react";
import "../../styles/projects.css";
import forward from "../../assets/arrowRight.png";

function Projects() {
  return (
    <div className="projects">
      
      <h4>Community</h4>
      <hr />
      <br />
      <div className="row">
        <div className="project-card">
          <a
            href="https://bootcampavenue.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootcamp Avenue <img src={forward} alt="forwarding" />
          </a>
          <p>Bootcamp reviews and informations</p>
        </div>
        <div className="project-card">
          <a
            href="https://nba-pelicans.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NBA Scores and News <img src={forward} alt="forwarding" />
          </a>
          <p>Get updates of latest NBA news and scores</p>
        </div>
      </div>
      <div className="row">
        <div className="project-card">
          <a
            href="https://urakymzhan.github.io/rgbaHex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            RgbHex <img src={forward} alt="forwarding" />
          </a>
          <p> CSS Color Picker </p>
        </div>
        <div className="project-card">
          <a
            href="https://upbeat-morse-c54379.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            InstaChat <img src={forward} alt="forwarding" />
          </a>
          <p>Create rooms and chat with your friends</p>
        </div>
      </div>
      <h5>Personal</h5>
      <hr />
      <br />
      <div className="row">
        <div className="project-card">
          <a
            href="https://hajime-player.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hajime <img src={forward} alt="forwarding" />
          </a>
          <p>Dedicated to one of my favorite artist</p>
        </div>
      </div>
      <h5>React</h5>
      <hr />
      <br />
      <div className="row">
        <div className="project-card">
          <a
            href="https://urakymzhan.github.io/pokedex/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokeGame <img src={forward} alt="forwarding" />
          </a>
          <p>Small Pokemon Game </p>
        </div>
        <div className="project-card">
          <a
            href="https://urakymzhan.github.io/hangman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HangMan <img src={forward} alt="forwarding" />
          </a>
          <p>Small Hangman Exercise</p>
        </div>
      </div>
      <br />
      <p id="git-link"> All projects have source code on github </p>
    </div>
  );
}

export default Projects;
