import React, { Component } from "react";

class PostComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
    this.handleNewComment = this.handleNewComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleNewComment(evt) {
    evt.preventDefault();
    this.props.addCommentToPostAtApi(this.props.postId, this.state.comment);
    this.setState({
      comment: ""
    });
  }

  handleDeleteComment(evt) {
    const post = this.props.posts.filter(post => post.id === this.props.postId);
    const commentsOfPost = post[0].comments;
    const idx = commentsOfPost.indexOf(evt.target.value);

    this.props.deleteComment(this.props.postId, idx);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    console.log("props in Post Comments -->", this.props);
    const id = this.props.postId;
    const comments = this.props.posts[id].comments;

    return (
      // displaying the comments
      <div className='postCommentForm'>
        <h3>Comments</h3>
        <ul>
          {comments.map(c => (
            <li key={c.id}>
              {c.text}
              <button
                className='btn btn-sm'
                value={c.text}
                onClick={this.handleDeleteComment}
              >
                Delete comment
              </button>
            </li>
          ))}
        </ul>
        {/* form for the comments */}
        <form onSubmit={this.handleNewComment}>
          <div className='form-group'>
            <label htmlFor='comment'>Add a comment</label>
            <input
              onChange={this.handleChange}
              name='comment'
              type='text'
              id='comment'
              value={this.state.comment}
              className='form-control'
            ></input>
            <button className='btn btn-primary' type='submit'>
              Submit comment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostComments;
