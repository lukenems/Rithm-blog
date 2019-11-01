import React, { Component } from "react";
import { Link } from "react-router-dom";

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      loading: true
    })
  }

  async componentDidMount() {
    await this.props.fetchAllPostsFromApi();
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      this.state.loading ? <div>Loading ...</div> :
        <div className={'container'}>
          {this.props.titles.map(post => (
            <div key={post.id} className={'card mt-2'} style={{ width: '18rem' }} >
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
