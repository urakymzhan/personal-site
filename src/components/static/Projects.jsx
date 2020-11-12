import React from 'react';
import forward from '../../assets/arrowRight.png';
import { ProjectsWrapper } from './styled';
import { clientProjects, otherProjects} from './dataStore';

function Projects() {
  return (
    <ProjectsWrapper>
      <p id="stack">
        <span>High Level Stack:</span> MERN, JavaScript, NextJS, GatsbyJS and
        many more.
      </p>
      <p id="git-link"> all projects have source code on github </p>
      <br />
      <h4>Client Projects</h4>
      <hr />
      <br />

      <div className="row">
      {
        clientProjects && clientProjects.map((project, idx) => {
          return (
            <div className="project-card" key={idx}>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}<img src={forward} alt="forwarding" />
              <p>{project.definition}</p>
            </a>

          </div>
          )
        })
      }
      </div>

      <h5>Other Projects</h5>
      <hr />
      <br />

      <div className="row">
      {
        otherProjects && otherProjects.map((project, idx) => {
          return (
            <div className="project-card" key={idx}>
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}<img src={forward} alt="forwarding" />
            <p>{project.definition}</p>
            </a>
          </div>
          )
        })
      }
      </div>

    </ProjectsWrapper>
  );
}

export default Projects;
