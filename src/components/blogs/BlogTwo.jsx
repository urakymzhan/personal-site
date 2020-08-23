import React, { useState, useEffect } from 'react';
import blogtwo from './content/blogtwo.md';
import ReactMarkdown from 'react-markdown';
import BlogWrapper from './styled';

function BlogTwo() {
  const [blog, setBlog] = useState('');

  useEffect(() => {
    fetch(blogtwo)
      .then((response) => response.text())
      .then((text) => {
        setBlog({ blog: text });
      });
  }, [blogtwo]);

  return (
    <BlogWrapper>
      <ReactMarkdown source={blog.blog} />
    </BlogWrapper>
  );
}

export default BlogTwo;
