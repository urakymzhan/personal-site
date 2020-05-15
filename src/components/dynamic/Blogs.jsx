import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../blogs/headline";
import './style/blogs.css';

export default function Blogs() {
  return (
    <div className="blogs-wrapper">
      <h3>All blogs</h3>
      <div className="blog-titles-content">
        {blogs.map((blog) => {
          return (
            <Link
              key={blog.id}
              to={{
                pathname: `/blogs/${blog.link}`,
              }}
            >
              <h4>
                {blog.id} - {blog.title}
              </h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
