import React, { Component } from "react";
import './Header.css'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="container header">
        <h1>Microblog</h1>
        <h3>Feel the Rithm</h3>
        <span>
          <Link to='/' >Blog </Link>
          <Link to='/new' >Add a new Post</Link>
        </span>
      </div>
    );
  }
}

export default Header;