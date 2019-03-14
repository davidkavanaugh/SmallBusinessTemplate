import React, { Component } from 'react';
import './BlogPost.css';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, blogpost: {} }
  }

  async componentDidMount() {
    let response = await fetch(`http://localhost:1337/blogposts/${this.props.match.params.id}`)
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
          <h2 className="blogpost__title">{this.state.blogpost.title}</h2>
          <img className="blogpost__image"src={`http://localhost:1337${this.state.blogpost.image.url}`} alt={this.state.blogpost.title} /><br />
          <p className="blogpost__description">
            {this.state.blogpost.content}
          </p>
        </div>
      );
    }

    return (<h4>Loading</h4>);
  }
}

export default BlogPost;