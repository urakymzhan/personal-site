import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../blogs/headline';
import { BlogHeaders, BlogTitles } from './styled';

export default function Blogs() {
  return (
      <BlogHeaders>
        <h3>All blogs</h3>
        <BlogTitles>
          {blogs.map((blog) => {
            return (
              <Link
                key={blog.id}
                to={{
                  pathname: `/blogs/${blog.link}`,
                }}
              >
                <h4>
                  {blog.id}. {blog.title}
                </h4>
              </Link>
            );
          })}
        </BlogTitles>
      </BlogHeaders>
  );
}
