import React, {Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';
import { blogs } from '../blogs/headline';
// import { MainRouter } from './styled';
import LayoutWrapper from '../utils/Layout';

const Home  = React.lazy( () => import('../static/Home.jsx'));
const Projects  = React.lazy( () => import('../static/Projects.jsx'));
const Videos  = React.lazy( () => import('../static/Videos.jsx'));
const NoMatch  = React.lazy( () => import('../static/NoMatch.jsx'));
const Certificates  = React.lazy( () => import('../static/Certificates.jsx'));
const BlogsNavigationPage  = React.lazy( () => import('./BlogsNavigationPage.jsx'));

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
        {/* <Route path="/bookshelf">
          <Bookshelf />
        </Route> */}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      </Suspense>
    </LayoutWrapper>
  );
};

export default Router;
