import React, { useState, useEffect } from 'react';
import blogone from './content/blogone.md';
import ReactMarkdown from 'react-markdown';
import './style/blogs.css';

function BlogOne() {
  const [blog, setBlog] = useState('');

  useEffect(() => {
    fetch(blogone)
      .then((response) => response.text())
      .then((text) => {
        setBlog({ blog: text });
      });
  }, []);
  return (
    <div className="blog-content">
      <ReactMarkdown source={blog.blog} />
    </div>
  );
}
export default BlogOne;
