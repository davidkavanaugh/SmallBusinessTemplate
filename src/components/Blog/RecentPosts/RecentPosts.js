import React, { Component } from 'react';
import Strapi from "strapi-sdk-javascript/build/main";
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import './RecentPosts.css';

const strapi = new Strapi("https://strapi-cms-lite.herokuapp.com");

class RecentPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogposts: []
   }
 }

async componentDidMount() {
 try {
   const blogposts = await strapi.getEntries("blogposts")
   this.setState({ blogposts });
 } 
 catch(err) {
  alert(err);
 }
}
render() {
  return (
    
    <div id="recent-posts">
      {this.state.blogposts.reverse().slice(-0, -this.state.blogposts.length+1).map(blogpost => 
        <div className="featured-blog-post" key={blogpost.id}>
         <h3 className="featured-blog-post__title">{blogpost.title}</h3>
         <img className="featured-blog-post__image"src={`https://strapi-cms-lite.herokuapp.com${blogpost.image.url}`} alt={blogpost.title} /><br />
         <article className="featured-blog-post__content"><Markdown>{blogpost.content}</Markdown></article>
        </div>
      )}
      <h4 className="recent-posts-section-title">Recent Posts</h4>
      {this.state.blogposts.slice(-0, 4).map(blogpost => 
        <div className="recent-posts" key={blogpost.id}>
          <Link className="flex" to={`/blogpost/${blogpost.id}`}>
            <h5 className="recent-posts__post-link">{blogpost.title}</h5>
          </Link>
        </div>
      )}
    </div>
  )
 }
}
export default RecentPosts;

