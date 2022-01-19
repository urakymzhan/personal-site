import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import BlogWrapper from "./styled";
import Navigator from "../utils/Navigator";

// TODO: add highlighter
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function Blog() {
  const [blog, setBlog] = useState("");
  // Show only specific blog
  const { pathname } = useLocation();
  let fileName = pathname.slice(7);

  useEffect(() => {
    // TODO: this might throw error because of require.
    const blogname = require(`./content/${fileName}.md`).default;
    fetch(blogname)
      .then((response) => response.text())
      .then((text) => {
        setBlog(text);
      });
  }, [fileName]);

  return (
    <Navigator>
      <BlogWrapper>
        {/* <ReactMarkdown
          children={blog}
          components={{
            code({ node, inline, children, ...props }) {
              return (
                <SyntaxHighlighter
                  children={children}
                  style={dark}
                  language="javascript"
                  // PreTag="div"
                  {...props}
                />
              );
            },
          }}
        /> */}
        <ReactMarkdown source={blog} />
      </BlogWrapper>
    </Navigator>
  );
}
export default Blog;
