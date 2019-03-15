import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';


import './BlogPost.css';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, blogpost: {} }
  }

  async componentDidMount() {
    let response = await fetch(`https://strapi-cms-lite.herokuapp.com/blogposts/${this.props.match.params.id}`)
    let data = await response.json()
    this.setState({
      loading: false,
      blogpost: data
    })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="blogpost">
          <Link className="return" to="/">recent posts</Link>   
          <h3 className="blogpost__title">{this.state.blogpost.title}</h3>
          <img className="blogpost__image"src={`https://strapi-cms-lite.herokuapp.com${this.state.blogpost.image.url}`} alt={this.state.blogpost.title} /><br />
          <Markdown>{this.state.blogpost.content}</Markdown>
        </div>
      );
    }

    return (<h4>Loading</h4>);
  }
}

export default BlogPost;