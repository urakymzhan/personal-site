import React, { useState, useEffect } from 'react';
import blogone from './content/blogone.md';
import ReactMarkdown from 'react-markdown';
import BlogWrapper from './styled';

function BlogOne() {
  const [blog, setBlog] = useState('');

  useEffect(() => {
    fetch(blogone)
      .then((response) => response.text())
      .then((text) => {
        setBlog({ blog: text });
      });
  }, [blogone]);

  return (
    <BlogWrapper>
      <ReactMarkdown source={blog.blog} />
    </BlogWrapper>
  );
}
export default BlogOne;
