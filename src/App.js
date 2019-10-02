import React, { Component } from 'react';
import Routes from './Routes';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  addPost(post) {
    this.setState(st => ({
      posts: [...st.posts, post]
    }))
  }

  editPost(id, editedPost) {
    this.setState(st => ({
      posts: st.posts.map((post) => {
        if (post.id === id) {
          return editedPost;
        }
        return post;
      })
    }));
  }

  deletePost(id) {
    this.setState(st => {
      return { posts: st.posts.filter(post => post.id !== id) }
    })
  }

  addComment(id, comment) {
    this.setState(st => ({
      posts: st.posts.map((post) => {
        console.log(post)
        if (post.id === id) {
          return { ...post, comments: [...post.comments, comment] };
        }
        return post;
      })
    }));
  }

  render() {
    console.log("STATE IN APP", this.state)
    return (
      <div className="App">
        <Routes
          addPost={this.addPost}
          posts={this.state.posts}
          editPost={this.editPost}
          deletePost={this.deletePost}
          addComment={this.addComment} />
      </div>
    );
  }
}

export default App;
