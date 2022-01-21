import React from "react";
import forward from "../assets/arrowRight.png";
import { ProjectsWrapper } from "./styled";
import { projects } from "../components/utils/dataStore";
import PageHeader from "../components/utils/Helmet";

function Projects() {
  return (
    <ProjectsWrapper>
      <PageHeader title="Projects" />
      <p id="stack">
        <span>High Level Stack:</span> JavaScript, ReactJS, React
        Native(Mobile), NextJS, GatsbyJS, HTML, CSS and backend integrations.
      </p>
      <p id="git-link"> All projects have source code on github </p>
      <br />

      <div className="row">
        {projects?.map((project, idx) => {
          return (
            <>
              <br />
              <h4 key={idx}>{project?.title}</h4>
              <hr />
              <br />
              {project?.content.map((content, i) => (
                <div className="project-card" key={i}>
                  <a
                    href={content?.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content?.title}
                    <img src={forward} alt="forwarding" />
                    <p>{content?.definition}</p>
                  </a>
                </div>
              ))}
            </>
          );
        })}
      </div>
    </ProjectsWrapper>
  );
}

export default Projects;
