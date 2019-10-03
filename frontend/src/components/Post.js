import React, { Component } from "react";
import Header from "./Header";
import EditPostForm from "./EditPostForm";
import PostComments from "./PostComments";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEditForm() {
    this.setState({
      editing: !this.state.editing
    });
  }

  handleDelete() {
    this.props.deletePost(this.props.match.params.id);
    this.props.history.push("/");
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    console.log("props in post.js", this.props);
    // let post = this.props.titles.filter(
    //   post => post.id === this.props.match.params.id
    // );
    // console.log("this is post", post);

    let { title, description, body, id, comments } = this.props.post[0];

    return (
      <div>
        <Header />
        <div className='postContainer'>
          <h1>{title}</h1>
          <h4>{description}</h4>
          <h5>{body}</h5>
          <button onClick={this.toggleEditForm}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
        {this.state.editing ? (
          <EditPostForm
            post={this.props.post[0]}
            editPost={this.props.editPost}
            toggleEditForm={this.toggleEditForm}
          />
        ) : null}
        <PostComments
          // posts={this.props.posts}
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
          postComments = {comments}
          postId={id}
        />
      </div>
    );
  }
}

export default Post;
