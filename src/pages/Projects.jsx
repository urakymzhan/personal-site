import React from "react";
import { ProjectsWrapper } from "./styled";
import { projects } from "./dataStore";
import PageHeader from "../components/utils/Helmet";
import { IoNavigate } from "react-icons/io5";

function Projects() {
  return (
    <ProjectsWrapper>
      <PageHeader title="Projects" />
      <p>
        <em id="git-link"> All projects have source code </em>
      </p>
      <p id="stack">
        <span>High Level Stack:</span> JavaScript, ReactJS, React
        Native(Mobile), NextJS, GatsbyJS, Socket.IO, HTML, CSS and backend
        integrations. No code platforms.
      </p>
      <div className="row">
        {projects?.map((project, idx) => {
          return (
            <div key={idx}>
              <br />
              <h4>{project?.title}</h4>
              <hr />
              {project?.content.map((content, i) => (
                <div className="project-card" key={i}>
                  <a
                    href={content?.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content?.title} <IoNavigate className="navigate-icon" />
                    <p>{content?.definition}</p>
                  </a>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </ProjectsWrapper>
  );
}

export default Projects;
