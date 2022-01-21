import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/utils/Helmet";
import { HomeWrapper } from "./styled";

const Home = () => {
  return (
    <HomeWrapper>
      <PageHeader title="Home" />
      <h1>
        Hi, <span>I'm Ulan</span>{" "}
      </h1>
      <p>
        I like to transform my ideas into <code>code</code>
      </p>
      <p>
        {" "}
        Fan of <code>hiking</code>, <code>running</code> and <code>coffee</code>
      </p>
      <h3>Purpose of this website:</h3>
      <p>Express my personal ideas</p>
      <p>Link to my projects</p>
      <p>Be useful to the world in some ways</p>
      <p>
        Check out my <Link to="blogs">blogs</Link>,{" "}
        <Link to="projects">projects</Link> and more from top left menu
      </p>
      <p className="bornplaceAndSocialMedia">
        Click below icons to find me on social media (resume LinkedIn icon)
      </p>
    </HomeWrapper>
  );
};

export default Home;
