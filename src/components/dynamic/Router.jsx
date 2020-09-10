import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Projects, Videos, NoMatch, Certificates } from '../static';
import { BlogsNavigationPage } from '.';
import { blogs } from '../blogs/headline';
import { MainRouter } from './styled';

const Router = () => {
  return (
    <MainRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/blogs">
          <BlogsNavigationPage />
        </Route>
        {blogs.map((blog) => {
          const Blog = blog.comp;
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
    </MainRouter>
  );
};

export default Router;
