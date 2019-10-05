import React, { Component } from "react";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    // this.deleteComment = this.deleteComment.bind(this);
  }

  // deleteComment(postId, idx) {
  //   // console.log("postId", postId)
  //   // console.log("idx", idx)
  //   this.setState(st => ({
  //     posts: st.posts.map((post) => {
  //       if (post.id === postId) {
  //         //COME BACK TO FIX THIS LATER. WE ARE DIRECTLY MODIFYING STATE - BADD!!!
  //         post.comments.splice(idx, 1)
  //         return { ...post, comments: post.comments }
  //       }
  //       return post;
  //     })
  //   }));
  // }

  render() {
    return (
      <div className='App'>
        <Routes deleteComment={this.deleteComment} />
      </div>
    );
  }
}

export default App;
