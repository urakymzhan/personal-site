import React, { useState, useEffect } from 'react';
import blogone from './content/blogone.md';
import ReactMarkdown from 'react-markdown';
import BlogWrapper from './styled';
import LayoutWrapper from '../utils/Layout';
import Navigator from '../utils/Navigator';

function BlogOne() {
  const [blog, setBlog] = useState('');

  useEffect(() => {
    fetch(blogone)
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
export default BlogOne;
