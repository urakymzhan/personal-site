import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../blogs/Blog";
import { blogs } from "../blogs/headline";
import LayoutWrapper from "../utils/Layout";

const Home = React.lazy(() => import("../../pages/Home.jsx"));
const Projects = React.lazy(() => import("../../pages/Projects.jsx"));
const Videos = React.lazy(() => import("../../pages/Videos.jsx"));
const NoMatch = React.lazy(() => import("../../pages/NoMatch.jsx"));
const Certificates = React.lazy(() => import("../../pages/Certificates.jsx"));
const BlogsNavigationPage = React.lazy(() =>
  import("./BlogsNavigationPage.jsx")
);

const Router = () => {
  return (
    <LayoutWrapper>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsNavigationPage />} />
          {blogs.map((blog) => {
            return (
              <Route
                key={blog.id}
                path={`/blogs/:${blog.link}`}
                element={<Blog />}
              />
            );
          })}
          <Route path="/projects" element={<Projects />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </LayoutWrapper>
  );
};

export default Router;
