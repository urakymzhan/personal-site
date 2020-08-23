import styled from 'styled-components';

// Home
export const HomeWrapper = styled.div`
  text-align: center;
  padding-top: 5px;

  .flag {
    width: 80px;
    height: 80px;
  }
  .bornplaceAndSocialMedia {
    color: gray;
    font-size: 10px;
  }
`;

// Footer
export const MainFooter = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  text-align: center;
  padding: 5px;

  a {
    margin-right: 10px;
  }
  .footer-icon {
    width: 30px;
    height: 30px;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .project-card {
    background-image: linear-gradient(to right, #998d23, #23998d);
    border-radius: 5px;
    flex: 0.45;
    padding: 8px;
    transition: 1.5s;
    cursor: pointer;
  }
  .project-card img {
    width: 20px;
    height: 20px;
  }
  .project-card a {
    font-size: 18px;
    color: inherit;
  }
  .project-card p {
    color: #333;
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
    .project-card img {
      width: 10px;
      height: 10px;
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
  color: #fff;
  background: linear-gradient(to right, #303030, #007685);
  padding: 10px;
  h1 {
    text-shadow: 1px 2px 8px rgb(194, 53, 65);
  }
  h5 {
    color: black;
    text-shadow: 1px 2px 8px rgb(255, 255, 255);
  }
  section {
    text-align: center;
  }
  .front-end-video {
    width: 55%;
    height: 300px;
  }
  .image-container {
    width: 50%;
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
`;
