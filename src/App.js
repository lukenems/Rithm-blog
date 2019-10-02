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
          return { editedPost };
        }
        return post;
      })
    }));
  }

  render() {
    console.log("STATE IN APP", this.state)
    return (
      <div className="App">
        <Routes addPost={this.addPost} posts={this.state.posts} editPost={this.editPost} />
      </div>
    );
  }
}

export default App;
