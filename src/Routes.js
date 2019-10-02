import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import PostForm from './components/PostForm';
import Post from './components/Post';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/new'
          render={(props) => <PostForm addPost={this.props.addPost} {...props} />} />

        <Route exact path='/:id'
          render={(props) =>
            <Post
              posts={this.props.posts}
              editPost={this.props.editPost}
              deletePost={this.props.deletePost}
              addComment = {this.props.addComment}
              {...props} />} />

        <Route path='/'
          render={() => <Home posts={this.props.posts} />} />

      </Switch>
    );
  }
}

export default Routes;
