import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { BlogWrapper, Button, Aligner } from "./styled";
// import Navigator from "../utils/Navigator";
import remarkGfm from "remark-gfm";
import ShareButtons from "./ShareButtons";
import PageHeader from "../utils/Helmet";
// Code highlighter theme
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

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
  let navigate = useNavigate();

  // Show only specific blog
  const { pathname } = useLocation();
  let fileName = pathname.slice(7);

  useEffect(() => {
    /*
     * TODO: ReferenceError: process is not defined
     */
    const blogname = require(`./content/${fileName}.md`).default;
    fetch(blogname)
      .then((response) => response.text())
      .then((text) => {
        setBlog(text);
      });
  }, [fileName]);

  // Set diff page title for each blog page
  const pagetitle = fileName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <BlogWrapper pagetitle={pagetitle}>
      <PageHeader title={pagetitle} />
      <Aligner>
        <Button type="button" onClick={() => navigate(-1)}>
          go back
        </Button>
        <ShareButtons />
      </Aligner>
      <ReactMarkdown
        // escapeHtml={false}
        source={blog}
        renderers={{ code: CodeBlock }}
        remarkPlugins={[remarkGfm]}
      />
      <ShareButtons />
    </BlogWrapper>
  );
}
export default Blog;
