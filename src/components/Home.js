import React, { Component } from "react";
import Header from './Header';
import TitleListContainer from '../containers/TitleListContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <TitleListContainer  />
      </div>
    );
  }
}

export default Home;