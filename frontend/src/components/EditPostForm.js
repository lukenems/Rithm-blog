import React, { Component } from "react";
import "./PostForm.css";

class EditPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title,
      description: this.props.post.description,
      body: this.props.post.body,
      id: this.props.post.id
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editPost(this.state);
    this.props.toggleEditForm();
  }

  render() {
    return (
      <div>
        <div id='form-container'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                onChange={this.handleChange}
                name='title'
                type='text'
                id='title'
                value={this.state.title}
                className='form-control'
              ></input>
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                onChange={this.handleChange}
                name='description'
                type='text'
                id='description'
                value={this.state.description}
                className='form-control'
              ></input>
            </div>
            <div className='form-group'>
              <label htmlFor='body'>Body</label>
              <textarea
                onChange={this.handleChange}
                name='body'
                type='text'
                id='body'
                value={this.state.body}
                className='form-control'
                style={{ height: "200px" }}
              ></textarea>
            </div>
            <button className='btn btn-primary' type='submit'>
              Add Post
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditPostForm;
