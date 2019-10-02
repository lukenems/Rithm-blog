import React, { Component } from "react";
import Header from "./Header";
import EditPostForm from './EditPostForm';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      editing: false
    })
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  toggleEditForm() {
    this.setState({
      editing: !this.state.editing
    })
  }

  render() {
    console.log("props in post.js", this.props);
    let post = this.props.posts.filter(post => post.id === this.props.match.params.id);
    console.log("this is post", post);
    let { title, description, body, id } = post[0];

    return (
      <div>
        <Header />
        <div className="postContainer">
          <h1>{title}</h1>
          <h4>{description}</h4>
          <h5>{body}</h5>
          <button onClick={this.toggleEditForm} >Edit</button>
          <button>Delete</button>
        </div>
        {this.state.editing ?
          <EditPostForm
            title={title}
            description={description}
            body={body}
            id={id}
            editPost={this.props.editPost}
            toggleEditForm={this.toggleEditForm} />
          : null}
      </div>
    );
  }
}

export default Post;