import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.jpeg';
import { SideNav, Profile, ProfileImage, SideNavBlogTitles } from './styled';

const Sidebar = () => {
  return (
    <SideNav>
      <Profile>
        <Link to="/">
          <ProfileImage src={profile} alt="profile picture" />
        </Link>
        <p>
          Ulan Rakymzhanov <br /> <span>Personal Blog</span>
        </p>
      </Profile>
      <SideNavBlogTitles>
        <Link to="/blogs">
          <li>
            <span role="img" aria-label="handwrite emoji">
              ✍🏻
            </span>{' '}
            Blogs{' '}
          </li>
        </Link>
        <Link to="/projects">
          <li>
            <span role="img" aria-label="tools emoji">
              🛠️
            </span>{' '}
            Projects
          </li>
        </Link>
        <Link to="/videos">
          <li>
            <span role="img" aria-label="televison emoji">
              📺
            </span>{' '}
            Teaching Videos
          </li>
        </Link>
      </SideNavBlogTitles>
    </SideNav>
  );
};

export default Sidebar;
