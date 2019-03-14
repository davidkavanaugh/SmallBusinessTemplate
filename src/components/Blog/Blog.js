import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { HashRouter as Router } from 'react-router-dom';
import BlogPost from './BlogPost/BlogPost';
import RecentPosts from './RecentPosts/RecentPosts';

import './Blog.css';


class Blog extends Component {
    render() {
      return (
        <div id="blog">
          <Router>            
          <Switch>
            <Route path="/" exact component={RecentPosts} />
            <Route path="/blogpost/:id" component={BlogPost} />
          </Switch>
          </Router>
        </div>
      );
    }
  }
  
  export default Blog;
  


