import React from 'react';
import Strapi from 'strapi-sdk-javascript';
import { Link } from 'react-router-dom';
import './OlderPosts.css';
const strapi = new Strapi("http://localhost:1337");

class OlderPosts extends React.Component {
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
    {this.state.posts.reverse().map(post => 
        <div className="older-posts" key={post.id}>
          <Link className="flex" to={`/blogpost/${post.id}`}>
            <h3 className="older-posts__post-link">{post.title}</h3>
          </Link>
        </div>
      )}     
    </section>
  )
 }
}
export default OlderPosts;