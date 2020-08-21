import React, { useState, useEffect } from 'react';
import blogtwo from './content/blogtwo.md';
import ReactMarkdown from 'react-markdown';
import './style/blogs.css';

function BlogTwo() {
  const [blog, setBlog] = useState('');

  useEffect(() => {
    fetch(blogtwo)
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

export default BlogTwo;
