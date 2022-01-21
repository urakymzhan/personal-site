import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/blogs">
            <BlogsNavigationPage />
          </Route>
          {blogs.map((blog) => {
            return (
              <Route
                key={blog.id}
                path={`/blogs/:${blog.link}`}
                component={Blog}
              />
            );
          })}
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/certificates">
            <Certificates />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </LayoutWrapper>
  );
};

export default Router;
