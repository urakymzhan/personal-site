import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Projects, NoMatch } from '../static';
import { Blogs } from '../dynamic'
import { blogs } from '../blogs/headline'
import '../../styles/App.css'

const Content = () => {
    return (
        <div className="contents"> 
            <Switch>
                
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/blogs">
                    <Blogs />
                </Route>
                {
                    blogs.map(blog => {
                        const Blog = blog.comp;
                        return (
                            <Route
                                key={blog.id} 
                                path={`/blogs/${blog.link}`} 
                                render={(props) => <Blog {...props}/>}
                            />
                        )
                    })
                }
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </div>
    );
  }

export default Content;


