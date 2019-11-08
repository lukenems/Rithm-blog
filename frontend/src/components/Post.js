import React, { Component } from "react";
import Header from "./Header";
import "./Post.css"
import EditPostForm from "./EditPostForm";
import PostCommentsContainer from "../containers/PostCommentsContainer";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      loading: true
    };
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    if (!this.props.posts[this.props.id]) {
      await this.props.fetchPostFromApi(this.props.id);
    }
    this.setState({ loading: false });
  }

  toggleEditForm() {
    this.setState({
      editing: !this.state.editing
    });
  }

  handleDelete() {
    this.props.deletePostAtApi(this.props.match.params.id);
    this.props.history.push("/");
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    let id = parseInt(this.props.id);

    return this.state.loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <Header />
        <div className='post-container container mt-2'>
          <h1>{this.props.posts[id].title}</h1>
          <h4>{this.props.posts[id].description}</h4>
          <h5>{this.props.posts[id].body}</h5>
        </div>
        <div className="post-buttons container d-flex justify-content-end">
          <button
            className={"btn btn-warning btn-sm mr-3"}
            onClick={this.toggleEditForm}
          >
            <i className='material-icons'>edit</i>
          </button>
          <button
            className={"btn btn-danger btn-sm"}
            onClick={this.handleDelete}
          >
            <i className='material-icons'>delete_forever</i>
          </button>
        </div>
        {this.state.editing ? (
          <EditPostForm
            post={this.props.posts[id]}
            editPost={this.props.editPostAtApi}
            toggleEditForm={this.toggleEditForm}
          />
        ) : null}
        <PostCommentsContainer props={this.props} />
      </div>
    );
  }
}

export default Post;
