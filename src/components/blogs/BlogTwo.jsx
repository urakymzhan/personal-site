import React, { useState, useEffect } from 'react';
import blogtwo from './content/blogtwo.md';
import ReactMarkdown from 'react-markdown';
import BlogWrapper from './styled';
import LayoutWrapper from '../utils/Layout';
import Navigator from '../utils/Navigator';

function BlogTwo() {
  const [blog, setBlog] = useState('');

  useEffect(() => {
    fetch(blogtwo)
      .then((response) => response.text())
      .then((text) => {
        setBlog({ blog: text });
      });
  }, [blog]);

  return (
    <LayoutWrapper>
      <Navigator>
        <BlogWrapper>
          <ReactMarkdown source={blog.blog} />
        </BlogWrapper>
      </Navigator>
    </LayoutWrapper>
  );
}

export default BlogTwo;
