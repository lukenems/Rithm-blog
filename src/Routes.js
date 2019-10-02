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
        render={() => <PostForm  addPost={this.props.addPost} />} />

        <Route exact path='/:id' 
        render={() => <Post />} />

        <Route path='/' 
        render={() => <Home posts={this.props.posts} />} />

      </Switch>
    );
  }
}

export default Routes;
