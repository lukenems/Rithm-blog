import React, { Component } from "react";
import Header from "./Header";
import "./PostForm.css";
import uuid from 'uuid/v4';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addPost({...this.state, id: uuid(), comments: [] });
    this.setState({
      title: "",
      description: "",
      body: ""
    })
    this.props.history.push('/')
  }


  render() {
    return (
      <div>
        <Header />
        <div id='form-container'>
          <h1>New Post</h1>
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

export default PostForm;
