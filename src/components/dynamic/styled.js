import styled from "styled-components";

// Sidebar
export const SideNav = styled.div`
  top: 0;
  left: 0;
  background-color: var(--sibebarBgColor);
  padding-top: 60px;
  min-height: 100vh;
  height: 100vh;
  font-size: var(--mainFont);
  color: var(--sidebarColor);
  transition: transform 0.3s ease-in;
  position: ${({ open }) => (open ? "fixed" : "absolute")};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  overflow: hidden;
  width: 100%;
`;

export const Profile = styled.div`
  text-align: center;
  font-weight: bold;
  overflow: hidden;
  margin-bottom: 10px;
  a {
    color: inherit;
    transition: color 0.4s linear;
    &:hover {
      color: var(--yellowgreen);
    }
    p {
      font-size: 14px;
    }
    p:first-child {
      margin-bottom: 0;
    }
    p:last-child {
      margin-top: 5px;
      margin-bottom: 0;
      color: var(--yellowgreen);
      transition: color 0.4s linear;
      &:hover {
        color: var(--white);
      }
    }
  }
`;
export const ProfileImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
  transition: 0.8s linear;

  &:hover {
    transform: scale(1.05);
  }
`;
export const SideNavBlogTitles = styled.ul`
  padding: 0;
  text-align: center;
  a {
    color: inherit;
    line-height: 24px;
    font-size: 24px;
  }
  li {
    padding: 18px 0;
    color: var(--yellowgreen);
    transition: color 0.4s linear;
    &:hover {
      color: #fff;
    }
  }
`;
