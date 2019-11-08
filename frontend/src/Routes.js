import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PostContainer from "./containers/PostContainer";
import PostFormContainer from "./containers/PostFormContainer";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/new'
          render={props => <PostFormContainer {...props} />}
        />
        <Route
          exact
          path='/:id'
          render={props => (
            // find post matching by id
            <PostContainer {...props} />
          )}
        />
        )
        <Route path='/' render={() => <Home posts={this.props.posts} />} />
      </Switch>
    );
  }
}

export default Routes;
