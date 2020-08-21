import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.jpeg';

const Sidebar = () => {
  return (
    <div className="sidenav">
      <div className="profile">
        <Link to="/">
          <img src={profile} alt="profile" className="profile-img" />
        </Link>
        <p>
          Ulan Rakymzhanov <br /> <span id="pblog-txt">Personal Blog</span>
        </p>
      </div>
      <ul className="blog-titles">
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
      </ul>
    </div>
  );
};

export default Sidebar;
