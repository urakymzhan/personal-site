import styled from "styled-components";

// Home
export const HomeWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  h1 {
    span {
      color: var(--darkred);
    }
  }
  .bornplaceAndSocialMedia {
    margin-top: 30px;
    color: gray;
    font-size: 10px;
  }
  code {
    text-shadow: 0 0 20px var(--darkred);
  }
  a {
    font-size: 20px;
    font-weight: 900;
}
`;

// Projects
export const ProjectsWrapper = styled.div`
  text-align: center;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 50px;

  #git-link {
    color: gray;
  }
  .row {
    margin-bottom: 20px;
  }
  .project-card {
    background-image: linear-gradient(to right, #998d23, #23998d);
    border-radius: 5px;
    padding: 5px;
    transition: 1.5s;
    cursor: pointer;
    margin-bottom: 8px;
  }
  .navigate-icon {
    font-size: 14px;
  }
  .project-card a {
    font-size: 18px;
    color: inherit;
  }
  .project-card p {
    color: #333;
    font-size: 12px;
  }
  .project-card:hover {
    background: #333;
    color: #fff;
  }
  .project-card:hover img {
    background: #fff;
    border-radius: 100px;
  }
  .project-card:hover a {
    color: #ffe69b;
  }
  .project-card:hover p {
    color: #fff;
  }
  #stack {
    font-size: 14px;
  }
  #stack span {
    background-color: #3f51b5;
    padding: 1px 5px;
    color: #fff;
    border-radius: 2px;
    font-weight: 900;
  }

  @media (max-width: 700px) {
    .row {
      margin-bottom: 0;
    }
    .project-card {
      flex-basis: 100%;
      margin-bottom: 10px;
    }
    .navigate-icon {
      font-size: 12px;
    }
    .project-card a {
      font-size: 12px;
      color: inherit;
    }
    .project-card p {
      font-size: 10px;
    }
  }
`;

// Videos
export const VideosWrapper = styled.div`
  padding: 10px;
  text-align: center;
  h1 {
    margin-top: 60px;
    text-transform: uppercase;
  }
  h5 {
    text-shadow: 1px 1px 10px rgb(255, 255, 255);
    margin-bottom: 5px;
  }
  section {
    text-align: center;
  }
  .front-end-video {
    width: 55%;
    height: 300px;
  }
  .image-container {
    width: 55%;
    height: 300px;
    margin: 0 auto;
  }
  #poster-image {
    width: 100%;
    height: 100%;
  }
  h3 {
    margin: 0;
  }
  h4 {
    margin-top: 8px;
    color: #f43688;
  }
  @media (max-width: 700px) {
    padding-bottom: 40px;
    .front-end-video {
      width: 100%;
      height: 200px;
    }
    .image-container {
      width: 100%;
      height: 200px;
      margin: 0 auto;
    }
    h4 {
      font-size: 10px;
    }
  }
`;
