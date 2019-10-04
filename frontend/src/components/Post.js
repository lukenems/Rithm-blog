import React, { Component } from "react";
import Header from "./Header";
import EditPostForm from "./EditPostForm";
import PostComments from "./PostComments";

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
    console.log("props before api call", this.props);
    await this.props.fetchPostFromApi(this.props.id);
    console.log(
      "props after api call",
      this.props,
      "this is state==>",
      this.state
    );
    this.setState({ loading: false });
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
    // let id = parseInt(this.props.posts[1].id)
    // let { title, description, body, comments } = this.props.posts[1];

    return (
        this.state.loading ? 
          <div>Loading...</div>
         : 
          <div>
            <Header />
            <div className='postContainer'>
              <h1>{this.props.posts[1].title}</h1>
              <h4>{this.props.posts[1].description}</h4>
              <h5>{this.props.posts[1].body}</h5>
              <button onClick={this.toggleEditForm}>Edit</button>
              <button onClick={this.handleDelete}>Delete</button>
            </div>
            {this.state.editing ? 
              <EditPostForm
                post={this.props.post[0]}
                editPost={this.props.editPost}
                toggleEditForm={this.toggleEditForm}
              />
             : null}
            {/* <PostComments
              // posts={this.props.posts}
              addComment={this.props.addComment}
              deleteComment={this.props.deleteComment}
              postComments={this.props.posts[1].comments}
              postId={this.props.posts[1].id}
            /> */}
          </div>
    );
  }
}

export default Post;
