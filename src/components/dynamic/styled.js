import styled from 'styled-components';

// BlogsNavigatorPage
export const BlogHeaders = styled.div`
  text-align: center;
  overflow: hidden;
  }
`;
export const BlogTitles = styled.div`
  text-align: left;
  a {
    color: var(--darkred);
  }
`;

// Sidebar
export const SideNav = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  width: 20%;
  background-color: var(--sibebarBgColor);
  padding-top: 40px;
  box-shadow: #333 1px 1px 10px;
  min-height: 100vh;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: var(--mainFont);
  color: var(--sidebarColor);
`;

export const Profile = styled.div`
  text-align: center;
  font-weight: bold;
  line-height: 22px;
  span {
    color: #c1eef4;
    font-size: 10px;
  }
  @media (max-width: 700px) {
    p {
      display: none;
    }
  }
`;
export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: 0.8s linear;

  &hover {
    transform: scale(1.1);
  }
  @media (max-width: 700px) {
    width: 80%;
    height: auto;
  }
`;
export const SideNavBlogTitles = styled.ul`
  padding: 0 10px 0 20px;
  a {
    color: inherit;
    line-height: 16.8px;
    &:hover {
      color: var(--white);
    }
  }
  li {
    padding: 6px 0px;
    color: yellowgreen;
  }

  @media (max-width: 700px) {
    padding: 0 2px 0 4px;
    li {
      padding: 2px 0;
    }
    a {
      font-size: 10px;
    }
  }
`;

// Router
export const MainRouter = styled.div`
  margin-left: 20%;
  font-size: var(--mainFont);
  overflow: auto;
  min-height: 100vh;
`;
