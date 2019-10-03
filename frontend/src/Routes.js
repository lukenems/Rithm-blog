import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Post from './components/Post';
import PostFormContainer from "./containers/PostFormContainer";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/new'
          render={(props) => <PostFormContainer {...props} />} />

        <Route exact path='/:id'
          render={(props) => (
            // find post matching by id
            <Post
              posts={this.props.posts}
              editPost={this.props.editPost}
              deletePost={this.props.deletePost}
              addComment = {this.props.addComment}
              deleteComment = {this.props.deleteComment}
          {...props} /> )} />
          )

        <Route path='/'
          render={() => <Home posts={this.props.posts} />} />

      </Switch>
    );
  }
}

export default Routes;
