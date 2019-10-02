import React, { Component } from "react";
import Header from './Header';
import TitleList from './TitleList';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <TitleList posts={this.props.posts} />
      </div>
    );
  }
}

export default Home;