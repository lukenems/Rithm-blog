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
    const idx = evt.target.value;
    this.props.deleteComment(this.props.postId, idx);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const id = this.props.postId;
    const comments = this.props.posts[id].comments;

    return (
      // displaying the comments
      <div className={"mt-3 container"}>
        <h3 style={{color: '#eee'}}>Comments</h3>
        <ul
          className={
            "list-group list-group-flush w-75 p-1.5 border border-secondary border-top-0 border-bottom-0 rounded"
          }
        >
          {comments.map(c => (
            <li
              className={"list-group-item d-flex justify-content-between"}
              key={c.id}
            >
              {c.text}
              <button
                className={"btn btn-danger btn-sm"}
                value={c.id}
                onClick={this.handleDeleteComment}
              >
                <i className='material-icons'>delete_forever</i>
              </button>
            </li>
          ))}
        </ul>
        {/* form for the comments */}
        <form onSubmit={this.handleNewComment}>
          <div className={"postCommentForm form-group w-75 mt-2"}>
            <label htmlFor={"comment"}>Add a comment</label>
            <input
              onChange={this.handleChange}
              name='comment'
              type='text'
              id='comment'
              value={this.state.comment}
              className='form-control'
            ></input>
            <button className={"btn btn-primary mt-2"} type='submit'>
              Submit comment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostComments;
