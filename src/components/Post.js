import React, { Component } from "react";
import Header from "./Header";
import EditPostForm from './EditPostForm';
import { Link, Redirect } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      editing: false,
      comment: ''
    })
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleNewComment = this.handleNewComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  toggleEditForm() {
    this.setState({
      editing: !this.state.editing
    })
  }

  handleDelete() {
    this.props.deletePost(this.props.match.params.id)
    this.props.history.push('/')
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleNewComment(evt) {
    evt.preventDefault();
    this.props.addComment(this.props.match.params.id, this.state.comment)
  }

  handleDeleteComment(evt){
    let post = this.props.posts.filter(post => post.id === this.props.match.params.id);
    let commentsOfPost = post[0].comments;
    let idx = commentsOfPost.indexOf(evt.target.value);
  
    this.props.deleteComment(this.props.match.params.id, idx );
  }

  render() {
    console.log("props in post.js", this.props);
    let post = this.props.posts.filter(post => post.id === this.props.match.params.id);
    console.log("this is post", post);

    let { title, description, body, id, comments } = post[0];

    return (
      <div>
        <Header />
        <div className="postContainer">
          <h1>{title}</h1>
          <h4>{description}</h4>
          <h5>{body}</h5>
          <button onClick={this.toggleEditForm} >Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
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

      </div>
    );
  }
}

export default Post;