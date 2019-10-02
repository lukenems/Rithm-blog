import React, { Component } from 'react';
import Routes from './Routes';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
    this.addPost = this.addPost.bind(this);
  }

  addPost(post) {
    this.setState(st => ({
      posts: [...st.posts, post] 
    }))
    
  }

  render() { 
    console.log(this.state)
  return (
    <div className="App">
      <Routes addPost={this.addPost} posts={this.state.posts} />
    </div>
  );
  }
}

export default App;
