import React, { Component } from "react";
import { Link } from "react-router-dom";

class TitleList extends Component {
  render() {
    console.log("props in titlelist", this.props)
    return (
      <div>
        {this.props.titles.map(post => (
          <div key={post.id} className='card' style={{ width: '18rem' }} >
            <div className='card-body'>
              <Link key={post.id} to={`/${post.id}`}>
                <h5 className='card-title'>{post.title}</h5>
              </Link>
              <h6 className='card-subtitle mb-2 text-muted'>{post.description}</h6>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TitleList;
