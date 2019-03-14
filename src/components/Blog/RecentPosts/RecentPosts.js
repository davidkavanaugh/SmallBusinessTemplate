import React from 'react';
import Strapi from "strapi-sdk-javascript/build/main";
import { Link } from 'react-router-dom';
import './RecentPosts.css';

const strapi = new Strapi("http://localhost:1337");

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
    <section className="recent-posts-section">
      {this.state.blogposts.reverse().slice(-0, -this.state.blogposts.length+1).map(blogpost => 
        <article className="featured-blog-post" key={blogpost.id}>
         <h3 className="featured-blog-post__title">{blogpost.title}</h3>
         <img className="featured-blog-post__image"src={`http://localhost:1337${blogpost.image.url}`} alt={blogpost.title} /><br />
         <div className="featured-blog-post__content">{blogpost.content}</div>
        </article>
      )}
      <h4 className="recent-posts-section-title">Recent Posts</h4>
      {this.state.blogposts.slice(-0, -this.state.blogposts.length+3).map(blogpost => 
        <div className="recent-posts" key={blogpost.id}>
          <Link className="flex" to={`/blogpost/${blogpost.id}`}>
            <h5 className="recent-posts__post-link">{blogpost.title}</h5>
          </Link>
        </div>
      )}
    </section>
  )
 }
}
export default RecentPosts;



// {this.state.posts.map(post => 
//   <div className="recent-posts" key={post.id}>
//     <Link className="flex" to={`/blogpost/${post.id}`}>
//       <h3 className="recent-posts__post-link">{post.title}</h3>
//     </Link>
//   </div>
// )}