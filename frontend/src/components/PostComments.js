import React, { Component } from "react";

class PostComments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: ''
    }
    this.handleNewComment = this.handleNewComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleNewComment(evt) {
    evt.preventDefault();
    this.props.addComment({postId: this.props.postId, comment: this.state.comment})
  }

  handleDeleteComment(evt){
    let post = this.props.posts.filter(post => post.id === this.props.postId);
    let commentsOfPost = post[0].comments;
    let idx = commentsOfPost.indexOf(evt.target.value);
  
    this.props.deleteComment(this.props.postId, idx );
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }


  render() {
    console.log("props in Post Comments -->", this.props)
    let comments = this.props.postComments;
    return (
      // displaying the comments
      <div className="postCommentForm">
          <h3>Comments</h3>
          <ul>
            {comments.map(c => (
              <li>
                {c}
                <button value = {c} onClick = {this.handleDeleteComment}>Delete comment</button>
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
              <button className="btn btn-primary" type="submit">Submit comment</button>
            </div>
          </form>

        </div>
    );
  }
}

export default PostComments;