import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import BlogWrapper from "./styled";
import Navigator from "../utils/Navigator";
import remarkGfm from "remark-gfm";

// TODO: add highlighter
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  twilight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

// Syntax Highlithing in markdown
const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {value}
    </SyntaxHighlighter>
  );
};

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
        <ReactMarkdown
          escapeHtml={false}
          source={blog}
          renderers={{ code: CodeBlock }}
          remarkPlugins={[remarkGfm]}
        />
      </BlogWrapper>
    </Navigator>
  );
}
export default Blog;
