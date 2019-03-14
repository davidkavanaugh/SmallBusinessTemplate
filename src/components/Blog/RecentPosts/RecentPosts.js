import React from 'react';
import Strapi from "strapi-sdk-javascript/build/main";
import { Link } from 'react-router-dom';
import './RecentPosts.css';

const strapi = new Strapi("http://localhost:1337");

class RecentPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
   }
 }

async componentDidMount() {
 try {
   const posts = await strapi.getEntries("blogposts")
   this.setState({ posts });
 } 
 catch(err) {
  alert(err);
 }
}
render() {
  return (
    <section>
      {this.state.posts.reverse().slice(-0, -this.state.posts.length+1).map(post => 
        <article className="featured-blog-post" key={post.id}>
         <h3 className="featured-blog-post__title">{post.title}</h3>
         <img className="featured-blog-post__image"src={`http://localhost:1337${post.image.url}`} alt={post.title} /><br />
         <div className="featured-blog-post__content">{post.content}</div>
        </article>
      )}
      <h2>Recent Posts</h2>
      {this.state.posts.slice(-0, -this.state.posts.length+3).map(post => 
        <div className="recent-posts" key={post.id}>
          <Link className="flex" to={`/blogpost/${post.id}`}>
            <h3 className="recent-posts__post-link">{post.title}</h3>
          </Link>
        </div>
      )}
      <Link className="" to="/older-posts">Older Posts</Link>
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