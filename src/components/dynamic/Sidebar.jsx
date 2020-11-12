import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.jpeg';
import { SideNav, Profile, ProfileImage, SideNavBlogTitles } from './styled';

const bookshelf_url="https://www.goodreads.com/review/list/120002670-ulan-rakymzhanov?ref=nav_mybooks&shelf=read";

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
        <Link to="/certificates">
          <li>
            <span role="img" aria-label="certificate emoji">
              📜
            </span>{' '}
            Qualifications
          </li>
        </Link>
        <a href={bookshelf_url} target="_blank" rel="noreferrer">
        <li>
            <span role="img" aria-label="bookshelf emoji">
              📚
            </span>{' '}
            Bookshelf
          </li>
        </a>
      </SideNavBlogTitles>
    </SideNav>
  );
};

export default Sidebar;
